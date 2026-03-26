"use client";

export default function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="container">
        <div className="mb-16 max-w-2xl">
          <span
            className="block font-mono text-xs uppercase tracking-widest mb-4"
            style={{ color: "var(--text-muted)" }}
          >
            Capabilities
          </span>
          <h2 className="text-white mb-4">What Hinton Can Do</h2>
        </div>

        <div
          className="grid grid-cols-12 gap-px"
          style={{ backgroundColor: "var(--border-subtle)" }}
        >
          <div
            className="col-span-8 p-8 flex flex-col gap-6 transition-all hover-bg-panel"
            style={{ backgroundColor: "var(--bg-base)" }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white mb-2">Behavioral Testing</h3>
                <p className="text-sm">
                  Simulates real user interactions and natural browsing
                  patterns.
                </p>
              </div>
              <span
                className="font-mono text-xs px-2 py-1 border rounded-sm"
                style={{
                  borderColor: "var(--border-medium)",
                  color: "var(--text-muted)",
                }}
              >
                API
              </span>
            </div>
          </div>

          <div
            className="col-span-4 p-8 flex flex-col gap-6 transition-all hover-bg-panel"
            style={{ backgroundColor: "var(--bg-base)" }}
          >
            <div>
              <h3 className="text-white mb-2">Error Detection</h3>
              <p className="text-sm">
                Identifies crashes, timeouts, and unexpected behaviors.
              </p>
            </div>
          </div>

          <div
            className="col-span-4 p-8 flex flex-col gap-6 transition-all hover-bg-panel"
            style={{ backgroundColor: "var(--bg-base)" }}
          >
            <div>
              <h3 className="text-white mb-2">Report Generation</h3>
              <p className="text-sm">
                Creates detailed, actionable bug reports.
              </p>
            </div>
          </div>

          <div
            className="col-span-4 p-8 flex flex-col gap-6 transition-all hover-bg-panel"
            style={{ backgroundColor: "var(--bg-base)" }}
          >
            <div>
              <h3 className="text-white mb-2">Full Coverage</h3>
              <p className="text-sm">
                Tests complete user journeys across all features.
              </p>
            </div>
          </div>

          <div
            className="col-span-4 p-8 flex flex-col gap-6 transition-all hover-bg-panel"
            style={{ backgroundColor: "var(--bg-base)" }}
          >
            <div>
              <h3 className="text-white mb-2">Real-Time Reporting</h3>
              <p className="text-sm">
                Live updates as tests run and issues are found.
              </p>
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