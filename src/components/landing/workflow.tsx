"use client";

export default function Workflow() {
  return (
    <section id="workflow" className="py-32 relative">
      <div className="container">
        <div className="mb-16 max-w-2xl">
          <span
            className="block font-mono text-xs uppercase tracking-widest mb-4"
            style={{ color: "var(--text-muted)" }}
          >
            How It Works
          </span>
          <h2 className="text-white mb-4">Simple Workflow</h2>
          <p className="text-base">
            Get actionable insights in minutes, not days.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 relative">
          <div
            className="absolute top-6 left-0 w-full h-px -z-10"
            style={{ backgroundColor: "var(--border-medium)" }}
          ></div>

          <div
            className="relative z-10 pt-0"
            style={{ backgroundColor: "var(--bg-base)" }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-mono text-lg mb-6"
              style={{
                backgroundColor: "var(--bg-panel)",
                border: "1px solid var(--border-strong)",
                color: "var(--text-main)",
              }}
            >
              1
            </div>
            <h3 className="text-white mb-3">Initialize Agent</h3>
            <p style={{ color: "var(--text-muted)" }}>
              Configure Hinton with your app URL and testing parameters.
            </p>
          </div>

          <div
            className="relative z-10 pt-0"
            style={{ backgroundColor: "var(--bg-base)" }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-mono text-lg mb-6"
              style={{
                backgroundColor: "var(--bg-panel)",
                border: "1px solid var(--border-strong)",
                color: "var(--text-main)",
              }}
            >
              2
            </div>
            <h3 className="text-white mb-3">Run Tests</h3>
            <p style={{ color: "var(--text-muted)" }}>
              Let Hinton explore your app like a real user would.
            </p>
          </div>

          <div
            className="relative z-10 pt-0"
            style={{ backgroundColor: "var(--bg-base)" }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-mono text-lg mb-6"
              style={{
                backgroundColor: "var(--bg-panel)",
                border: "1px solid var(--border-strong)",
                color: "var(--text-main)",
              }}
            >
              3
            </div>
            <h3 className="text-white mb-3">Review Reports</h3>
            <p style={{ color: "var(--text-muted)" }}>
              Get detailed, structured reports on all issues found.
            </p>
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