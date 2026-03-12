import ScrollReveal from "@/components/ScrollReveal";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  return (
    <main style={{ background: "#080D1A", color: "#F0EBE1" }}>

      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden hero-grain"
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <p
            className="text-sm font-bold tracking-widest uppercase mb-8"
            style={{ color: "#F5A623" }}
          >
            door to moon
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8"
            style={{ wordBreak: "keep-all" }}
          >
            출퇴근길이
            <br />
            <span style={{ color: "#F5A623" }}>3분처럼</span> 느껴진 적,
            <br />
            있나요?
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-lg mx-auto"
            style={{ color: "#7A8499" }}
          >
            그 경험을 기억하나요.
            <br />
            너무 몰입해서 내릴 역을 지나칠 뻔했던 그 순간.
          </p>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow"
          style={{ color: "#7A8499" }}
        >
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
            <rect x="7" y="1" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="10" cy="5" r="1.5" fill="currentColor" />
            <line x1="10" y1="19" x2="10" y2="28" stroke="currentColor" strokeWidth="1.5" />
            <polyline points="6,24 10,29 14,24" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      </section>

      {/* ── 2. The Feeling ──────────────────────────────────────── */}
      <section
        className="py-32 px-6"
        style={{ background: "#0F1629" }}
      >
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-10"
              style={{ color: "#F5A623" }}
            >
              그 순간
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <blockquote
              className="text-2xl sm:text-3xl font-bold leading-relaxed mb-12"
              style={{ wordBreak: "keep-all" }}
            >
              좋은 책 한 권,
              <br />
              또는 딱 맞는 영상 하나.
              <br />
              <br />
              눈을 들었더니
              <br />
              이미 도착해 있다.
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p
              className="text-lg leading-[1.9]"
              style={{ color: "#7A8499", wordBreak: "keep-all" }}
            >
              긴 출퇴근이 전혀 길지 않았다.
              오히려 짧았다.
              <br /><br />
              딱 맞는 걸 만난 거다.
              그 순간, 시간이 사라졌다.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 3. The Reality ──────────────────────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-10"
              style={{ color: "#7A8499" }}
            >
              현실
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight mb-10"
              style={{ wordBreak: "keep-all" }}
            >
              근데 그런 날이
              <br />
              얼마나 되나요?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div
              className="border-l-2 pl-6 space-y-4 mb-10"
              style={{ borderColor: "#2A3350" }}
            >
              <p className="text-lg leading-[1.9]" style={{ color: "#7A8499", wordBreak: "keep-all" }}>
                오늘은 뭘 보지? 하고 앱을 여는데, 마음이 안 간다.
              </p>
              <p className="text-lg leading-[1.9]" style={{ color: "#7A8499", wordBreak: "keep-all" }}>
                어제처럼 빠져들고 싶은데, 그게 잘 안 된다.
              </p>
              <p className="text-lg leading-[1.9]" style={{ color: "#7A8499", wordBreak: "keep-all" }}>
                결국 아무것도 시작하지 못한 채 내린다.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p
              className="text-xl font-bold leading-[1.9]"
              style={{ wordBreak: "keep-all" }}
            >
              그 몰입의 순간을 찾고 있는데,
              <br />
              매번 찾지 못하는 것뿐이다.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 4. Founder ──────────────────────────────────────────── */}
      <section
        className="py-32 px-6"
        style={{ background: "#0F1629" }}
      >
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-10"
              style={{ color: "#F5A623" }}
            >
              왜 우리가 이걸 시작했냐면
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p
              className="text-lg sm:text-xl leading-[1.9] mb-6"
              style={{ wordBreak: "keep-all" }}
            >
              결혼하고 나서 나는 편도 1.5시간짜리 통근자가 됐다.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p
              className="text-lg leading-[1.9] mb-6"
              style={{ color: "#7A8499", wordBreak: "keep-all" }}
            >
              어떤 날은 책 한 챕터에 완전히 빠져서
              도착한 걸 몰랐다.
              어떤 날은 유튜브를 열었다 닫았다
              1시간 내내 아무것도 보지 못했다.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p
              className="text-lg leading-[1.9] mb-10"
              style={{ color: "#7A8499", wordBreak: "keep-all" }}
            >
              그 차이가 뭔지 계속 생각했다.
              <br />
              좋은 콘텐츠가 없는 게 아니다.
              <br />
              나에게 맞는 걸, 그 순간에 만나기가 어려운 거다.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p
              className="text-xl font-bold leading-[1.9]"
              style={{ wordBreak: "keep-all" }}
            >
              지하철에 타는 순간,
              <br />
              바로 빠져들 수 있느냐 없느냐의 차이였다.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 5. Mission ──────────────────────────────────────────── */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <p
              className="text-sm font-bold tracking-widest uppercase mb-8"
              style={{ color: "#F5A623" }}
            >
              door to moon
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-12"
              style={{ wordBreak: "keep-all" }}
            >
              출퇴근 시간이
              <br />
              <span style={{ color: "#F5A623" }}>3분처럼</span> 느껴지게.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p
              className="text-lg sm:text-xl leading-[1.9]"
              style={{ color: "#7A8499", wordBreak: "keep-all" }}
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

      {/* ── 6. Newsletter CTA ───────────────────────────────────── */}
      <section
        className="py-32 px-6"
        style={{ background: "#0F1629" }}
      >
        <div className="max-w-xl mx-auto text-center">
          <ScrollReveal>
            <h2
              className="text-3xl sm:text-4xl font-black mb-4"
              style={{ wordBreak: "keep-all" }}
            >
              같은 생각을 하고 있다면
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p
              className="text-lg mb-10"
              style={{ color: "#7A8499", wordBreak: "keep-all" }}
            >
              우리가 만들어가는 것을 함께 지켜봐 주세요.
              <br />
              과하게 자주 보내지 않을게요.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <NewsletterForm />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer
        className="py-10 px-6 text-center"
        style={{ borderTop: "1px solid #0F1629" }}
      >
        <p
          className="text-sm font-bold tracking-widest uppercase mb-2"
          style={{ color: "#F5A623" }}
        >
          door to moon
        </p>
        <p className="text-xs" style={{ color: "#7A8499" }}>
          © 2025 doortomoon. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
