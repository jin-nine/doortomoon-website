import ScrollReveal from "@/components/ScrollReveal";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  return (
    <main className="grain-overlay overflow-x-hidden">

      {/* ── Floating Glass Nav ─────────────────────────────────── */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-40 glass-pill rounded-full px-7 py-3 flex items-center gap-6">
        <span className="text-[13px] font-bold tracking-[0.2em] uppercase" style={{ color: "#D4952A" }}>
          doortomoon
        </span>
      </nav>

      {/* ══════════════════════════════════════════════════════════
          HERO — Editorial Split: massive type left, void right
          ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        {/* Mesh gradient backdrop */}
        <div
          className="absolute top-1/2 left-[30%] w-[700px] h-[700px] animate-mesh-drift"
          style={{
            background: "radial-gradient(circle, rgba(212,149,42,0.07) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-[20%] right-[15%] w-[400px] h-[400px] animate-float-slower"
          style={{
            background: "radial-gradient(circle, rgba(107,107,118,0.05) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            {/* Eyebrow pill */}
            <div className="mb-10">
              <span
                className="inline-block rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium"
                style={{ background: "rgba(212, 149, 42, 0.1)", color: "#D4952A" }}
              >
                door to moon
              </span>
            </div>

            <h1
              className="text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[1.08] tracking-tight mb-10"
            >
              출퇴근길이
              <br />
              <span style={{ color: "#D4952A" }}>3분처럼</span> 느껴진 적,
              <br />
              있나요?
            </h1>

            <p
              className="text-lg sm:text-xl leading-relaxed max-w-md"
              style={{ color: "#6B6B76" }}
            >
              너무 몰입해서 내릴 역을 지나칠 뻔했던 그 순간.
              <br />
              그 경험을 기억하나요.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-drift-down" style={{ color: "#3A3A44" }}>
          <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
            <rect x="5" y="0" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="8" cy="4.5" r="1.2" fill="currentColor" />
            <line x1="8" y1="17" x2="8" y2="25" stroke="currentColor" strokeWidth="1.2" />
            <polyline points="5,22 8,26 11,22" stroke="currentColor" strokeWidth="1.2" fill="none" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          THE FEELING — Right-aligned glass card, asymmetric
          ══════════════════════════════════════════════════════════ */}
      <section className="py-28 sm:py-40 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto flex justify-end">
          <div className="w-full max-w-xl">
            <div className="glass-card-outer">
              <div className="glass-card-inner px-8 sm:px-12 py-12 sm:py-14">
                <ScrollReveal>
                  <span
                    className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium mb-10"
                    style={{ background: "rgba(212, 149, 42, 0.1)", color: "#D4952A" }}
                  >
                    그 순간
                  </span>
                </ScrollReveal>

                <ScrollReveal delay={80}>
                  <blockquote className="text-2xl sm:text-3xl font-bold leading-snug mb-10">
                    좋은 책 한 권,
                    <br />
                    또는 딱 맞는 영상 하나.
                    <br />
                    <span className="block mt-6" />
                    눈을 들었더니
                    <br />
                    이미 도착해 있다.
                  </blockquote>
                </ScrollReveal>

                <ScrollReveal delay={160}>
                  <p className="text-base sm:text-lg leading-[1.85]" style={{ color: "#6B6B76" }}>
                    긴 출퇴근이 전혀 길지 않았다.
                    <br />
                    오히려 짧았다.
                    <br /><br />
                    딱 맞는 걸 만난 거다.
                    <br />
                    그 순간, 시간이 사라졌다.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          THE REALITY — Two-column editorial split
          ══════════════════════════════════════════════════════════ */}
      <section className="py-28 sm:py-40 px-6 sm:px-10 lg:px-16 relative">
        {/* Subtle ambient */}
        <div
          className="absolute bottom-0 left-[10%] w-[500px] h-[300px] animate-float-slow"
          style={{
            background: "radial-gradient(circle, rgba(212,149,42,0.04) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left — Heading, wide */}
            <div className="lg:col-span-5 lg:sticky lg:top-40 lg:self-start">
              <ScrollReveal>
                <span
                  className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium mb-8"
                  style={{ background: "rgba(107, 107, 118, 0.1)", color: "#6B6B76" }}
                >
                  현실
                </span>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.1] tracking-tight">
                  근데 그런 날이
                  <br />
                  얼마나 되나요?
                </h2>
              </ScrollReveal>
            </div>

            {/* Right — Content */}
            <div className="lg:col-span-6 lg:col-start-7">
              <ScrollReveal delay={160}>
                <div className="space-y-6 mb-14">
                  {[
                    "오늘은 뭘 보지? 하고 앱을 여는데, 마음이 안 간다.",
                    "어제처럼 빠져들고 싶은데, 그게 잘 안 된다.",
                    "결국 아무것도 시작하지 못한 채 내린다.",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex gap-5 items-start"
                    >
                      <div
                        className="mt-2.5 w-1 h-1 rounded-full shrink-0"
                        style={{ background: "#3A3A44" }}
                      />
                      <p className="text-base sm:text-lg leading-[1.85]" style={{ color: "#6B6B76" }}>
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={240}>
                <p className="text-xl sm:text-2xl font-bold leading-snug">
                  그 몰입의 순간을 찾고 있는데,
                  <br />
                  매번 찾지 못하는 것뿐이다.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FOUNDER — Left-aligned narrative with accent line
          ══════════════════════════════════════════════════════════ */}
      <section className="py-28 sm:py-40 px-6 sm:px-10 lg:px-16 relative">
        {/* Ambient */}
        <div
          className="absolute top-[30%] right-0 w-[400px] h-[400px] animate-float-slower"
          style={{
            background: "radial-gradient(circle, rgba(212,149,42,0.05) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span
                className="inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.15em] font-medium mb-10"
                style={{ background: "rgba(212, 149, 42, 0.1)", color: "#D4952A" }}
              >
                왜 우리가 이걸 시작했냐면
              </span>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <p className="text-xl sm:text-2xl font-semibold leading-snug mb-8">
                결혼하고 나서 나는
                <br />
                편도 1.5시간짜리 통근자가 됐다.
              </p>
            </ScrollReveal>

            <div className="space-y-8 mb-14">
              <ScrollReveal delay={160}>
                <p className="text-base sm:text-lg leading-[1.85]" style={{ color: "#6B6B76" }}>
                  어떤 날은 책 한 챕터에 완전히 빠져서
                  도착한 걸 몰랐다.
                  어떤 날은 유튜브를 열었다 닫았다
                  1시간 내내 아무것도 보지 못했다.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={240}>
                <p className="text-base sm:text-lg leading-[1.85]" style={{ color: "#6B6B76" }}>
                  그 차이가 뭔지 계속 생각했다.
                  <br />
                  좋은 콘텐츠가 없는 게 아니다.
                  <br />
                  나에게 맞는 걸, 그 순간에 만나기가 어려운 거다.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={320}>
              <div className="accent-line">
                <p className="text-xl sm:text-2xl font-bold leading-snug">
                  지하철에 타는 순간,
                  <br />
                  바로 빠져들 수 있느냐
                  <br />
                  없느냐의 차이였다.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MISSION — Full-width cinematic statement
          ══════════════════════════════════════════════════════════ */}
      <section className="py-40 sm:py-56 px-6 sm:px-10 lg:px-16 relative overflow-hidden">
        {/* Large centered ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 w-[800px] h-[600px] animate-mesh-drift"
          style={{
            background: "radial-gradient(ellipse, rgba(212,149,42,0.06) 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span
              className="inline-block rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] font-medium mb-10"
              style={{ background: "rgba(212, 149, 42, 0.1)", color: "#D4952A" }}
            >
              door to moon
            </span>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h2 className="text-[clamp(2.25rem,6vw,4.5rem)] font-black leading-[1.1] tracking-tight mb-14">
              출퇴근 시간이
              <br />
              <span style={{ color: "#D4952A" }}>3분처럼</span> 느껴지게.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p
              className="text-lg sm:text-xl leading-[1.85] max-w-lg mx-auto"
              style={{ color: "#6B6B76" }}
            >
              집에서 회사로, 회사에서 집으로.
              <br />
              그 사이 시간이 doortomoon의 전부입니다.
              <br /><br />
              매일의 출퇴근이 몰입의 시간이 되도록.
              <br />
              그 경험을 만들어갑니다.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          NEWSLETTER CTA — Double-bezel glass card
          ══════════════════════════════════════════════════════════ */}
      <section className="py-28 sm:py-40 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="w-full max-w-2xl glass-card-outer">
            <div className="glass-card-inner px-8 sm:px-16 py-14 sm:py-20 text-center">
              <ScrollReveal>
                <h2
                  className="text-3xl sm:text-4xl font-black leading-tight mb-5"
                  style={{ textWrap: "balance" }}
                >
                  같은 생각을 하고 있다면
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <p className="text-base sm:text-lg mb-12" style={{ color: "#6B6B76" }}>
                  우리가 만들어가는 것을 함께 지켜봐 주세요.
                  <br />
                  과하게 자주 보내지 않을게요.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={160}>
                <NewsletterForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="py-14 px-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <span
          className="text-[13px] font-bold tracking-[0.2em] uppercase"
          style={{ color: "#D4952A" }}
        >
          doortomoon
        </span>
        <p className="text-xs mt-2" style={{ color: "#3A3A44" }}>
          © 2025 doortomoon. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
