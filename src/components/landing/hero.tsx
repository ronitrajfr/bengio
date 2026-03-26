"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="pb-24 relative"
      style={{ paddingTop: "calc(3.75rem + 6rem)" }}
    >
      <div className="container grid grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6 items-start">
          <div
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            <span
              className="w-3 h-px"
              style={{ backgroundColor: "var(--accent-red)" }}
            ></span>
            Autonomous QA Agent
          </div>

          <h1 className="text-white">
            Your app is broken.
            <br />
            Find out where.
          </h1>

          <p
            className="text-lg max-w-xl"
            style={{ color: "var(--text-muted)" }}
          >
            Hinton behaves like a real, frustrated human user. It clicks, types,
            navigates, and generates structured reports on bugs, friction
            points, and missing features.
          </p>

          <div className="flex gap-4 mt-2">
            <Link href="#" className="btn btn-primary" aria-label="Start Testing">
              Start Testing
            </Link>
            <Link href="#" className="btn btn-secondary" aria-label="View Sample Output">
              View Sample Output
            </Link>
          </div>

          <div
            className="text-xs font-mono mt-4"
            style={{ color: "var(--text-dim)" }}
          >
            $ npm install @hinton/cli -g
          </div>
        </div>

        <div
          className="bg-white/5 border rounded-sm overflow-hidden flex flex-col h-96"
          style={{
            borderColor: "var(--border-medium)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
          }}
        >
          <div
            className="h-9 border-b flex items-center justify-between px-4"
            style={{
              backgroundColor: "var(--bg-elevated)",
              borderBottomColor: "var(--border-medium)",
            }}
          >
            <div className="flex gap-1.5">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: "var(--border-strong)" }}
              ></div>
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: "var(--border-strong)" }}
              ></div>
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: "var(--border-strong)" }}
              ></div>
            </div>
            <div
              className="text-xs font-mono"
              style={{ color: "var(--text-muted)" }}
            >
              hinton-agent-v2.1.0
            </div>
            <div style={{ opacity: 0 }}>...</div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            <div
              className="w-15 border-r flex flex-col items-center pt-4 gap-4"
              style={{
                backgroundColor: "var(--bg-elevated)",
                borderRightColor: "var(--border-medium)",
              }}
            >
              <div
                className="w-6 h-6 rounded-sm border opacity-100"
                style={{
                  borderColor: "var(--text-main)",
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
              ></div>
              <div
                className="w-6 h-6 rounded-sm border opacity-50"
                style={{ borderColor: "var(--border-medium)" }}
              ></div>
              <div
                className="w-6 h-6 rounded-sm border opacity-50"
                style={{ borderColor: "var(--border-medium)" }}
              ></div>
            </div>

            <div
              className="flex-1 p-4 font-mono text-xs flex flex-col gap-2 overflow-hidden"
              style={{ color: "var(--text-dim)" }}
            >
              <div className="flex gap-4">
                <span style={{ color: "var(--border-strong)" }}>12:03</span>
                <span style={{ color: "var(--text-muted)" }}>initialized</span>
                <span style={{ color: "var(--text-main)" }}>
                  hinton-agent-v2.1.0
                </span>
              </div>
              <div className="flex gap-4">
                <span style={{ color: "var(--border-strong)" }}>12:04</span>
                <span style={{ color: "var(--text-muted)" }}>navigated to</span>
                <span style={{ color: "var(--text-main)" }}>
                  dashboard.example.com
                </span>
              </div>
              <div className="flex gap-4">
                <span style={{ color: "var(--text-muted)" }}>clicked</span>
                <span style={{ color: "var(--text-main)" }}>Login Button</span>
              </div>

              <div
                className="mt-4 p-4 border rounded-sm animate-in fade-in"
                style={{
                  borderColor: "rgba(255, 62, 62, 0.3)",
                  backgroundColor: "rgba(255, 62, 62, 0.05)",
                  color: "var(--accent-red)",
                }}
              >
                <div className="font-bold mb-1 flex justify-between">
                  <span>Error: Button Not Interactive</span>
                  <span
                    style={{ color: "var(--text-muted)", fontSize: "0.7rem" }}
                  >
                    12:06
                  </span>
                </div>
                <div
                  style={{ color: "var(--text-muted)", fontSize: "0.7rem" }}
                >
                  The login button is not responding to clicks
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute top-0 left-1/2 w-px h-full -translate-x-1/2 -z-10"
        style={{ backgroundColor: "var(--border-subtle)" }}
      ></div>
    </section>
  );
}