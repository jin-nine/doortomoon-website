"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [focused, setFocused] = useState(false);

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
      <div className="text-center py-6">
        <p className="text-lg font-medium" style={{ color: "#D4952A" }}>
          감사합니다. 소식을 전해드릴게요.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div
        className="flex items-center gap-0 rounded-full p-1.5 spring-transition"
        style={{
          background: "rgba(255, 255, 255, 0.04)",
          border: `1px solid ${focused ? "rgba(212, 149, 42, 0.3)" : "rgba(255, 255, 255, 0.06)"}`,
          boxShadow: focused
            ? "0 0 0 3px rgba(212, 149, 42, 0.06), inset 0 1px 1px rgba(255, 255, 255, 0.06)"
            : "inset 0 1px 1px rgba(255, 255, 255, 0.06)",
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="이메일을 입력해주세요"
          required
          className="flex-1 bg-transparent px-5 py-3.5 text-[15px] outline-none placeholder:text-[#4A4A54]"
          style={{ color: "#EDEDED" }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-[15px] whitespace-nowrap spring-transition"
          style={{
            background: status === "loading" ? "#A87422" : "#D4952A",
            color: "#050505",
            cursor: status === "loading" ? "not-allowed" : "pointer",
          }}
          onMouseEnter={(e) => {
            if (status !== "loading") {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(212, 149, 42, 0.2)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
          onMouseDown={(e) => {
            if (status !== "loading") e.currentTarget.style.transform = "scale(0.98)";
          }}
          onMouseUp={(e) => {
            if (status !== "loading") e.currentTarget.style.transform = "scale(1.02)";
          }}
        >
          {status === "loading" ? (
            "..."
          ) : (
            <>
              구독하기
              <span
                className="flex items-center justify-center w-6 h-6 rounded-full spring-transition"
                style={{ background: "rgba(5, 5, 5, 0.15)" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </>
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-4 text-sm text-center" style={{ color: "#D4952A" }}>
          오류가 발생했습니다. 다시 시도해주세요.
        </p>
      )}
      <p className="mt-5 text-xs text-center" style={{ color: "#4A4A54" }}>
        스팸은 보내지 않습니다. 언제든 구독 해지 가능합니다.
      </p>
    </form>
  );
}
