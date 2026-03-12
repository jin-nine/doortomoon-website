"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-4">
        <p className="text-lg" style={{ color: "#F5A623" }}>
          구독해주셨습니다. 소식을 전해드릴게요.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일 주소를 입력해주세요"
          required
          className="flex-1 px-4 py-3 rounded-lg text-base outline-none"
          style={{
            background: "#0F1629",
            border: "1px solid #2A3350",
            color: "#F0EBE1",
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 rounded-lg font-bold text-base transition-colors"
          style={{
            background: status === "loading" ? "#C4841A" : "#F5A623",
            color: "#080D1A",
            cursor: status === "loading" ? "not-allowed" : "pointer",
          }}
        >
          {status === "loading" ? "..." : "구독하기"}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-sm text-center" style={{ color: "#F5A623" }}>
          오류가 발생했습니다. 다시 시도해주세요.
        </p>
      )}
      <p className="mt-3 text-xs text-center" style={{ color: "#7A8499" }}>
        스팸은 보내지 않습니다. 언제든 구독 해지 가능합니다.
      </p>
    </form>
  );
}
