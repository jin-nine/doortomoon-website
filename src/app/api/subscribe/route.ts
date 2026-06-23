import { NextResponse } from "next/server";

const NOTION_VERSION = "2022-06-28";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// We discover the database's column names once per process instead of
// hard-coding them, so the manual DB setup can't break us by naming columns
// differently. Every Notion DB has exactly one "title" property (whatever it's
// named); we also use a dedicated "email" property if the user added one.
let cachedSchema: { titleProp: string; emailProp: string | null } | null = null;

async function getSchema(
  token: string,
  dbId: string,
): Promise<{ titleProp: string; emailProp: string | null }> {
  if (cachedSchema) return cachedSchema;

  const res = await fetch(`https://api.notion.com/v1/databases/${dbId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": NOTION_VERSION,
    },
  });
  if (!res.ok) {
    throw new Error(`schema fetch ${res.status}: ${await res.text()}`);
  }

  const db = (await res.json()) as {
    properties: Record<string, { type: string }>;
  };
  let titleProp: string | null = null;
  let emailProp: string | null = null;
  for (const [name, prop] of Object.entries(db.properties)) {
    if (prop.type === "title") titleProp = name;
    else if (prop.type === "email" && !emailProp) emailProp = name;
  }
  if (!titleProp) {
    throw new Error("database has no title property");
  }

  cachedSchema = { titleProp, emailProp };
  return cachedSchema;
}

export async function POST(req: Request) {
  let email: string | undefined;
  try {
    const body = await req.json();
    email = typeof body?.email === "string" ? body.email.trim() : undefined;
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "올바른 이메일 주소를 입력해주세요." },
      { status: 400 },
    );
  }

  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!token || !databaseId) {
    console.error("Missing NOTION_TOKEN or NOTION_DATABASE_ID env var");
    return NextResponse.json({ error: "서버 설정 오류입니다." }, { status: 500 });
  }

  try {
    const { titleProp, emailProp } = await getSchema(token, databaseId);

    const properties: Record<string, unknown> = {
      [titleProp]: { title: [{ text: { content: email } }] },
    };
    if (emailProp) {
      properties[emailProp] = { email };
    }

    const res = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parent: { database_id: databaseId },
        properties,
      }),
    });

    if (!res.ok) {
      console.error("Notion API error", res.status, await res.text());
      return NextResponse.json({ error: "저장에 실패했습니다." }, { status: 502 });
    }
  } catch (err) {
    console.error("Subscribe failed", err);
    return NextResponse.json({ error: "저장에 실패했습니다." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
