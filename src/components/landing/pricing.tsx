"use client";

import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 relative">
      <div className="container">
        <div className="mb-16 max-w-2xl mx-auto text-center">
          <span
            className="block font-mono text-xs uppercase tracking-widest mb-4"
            style={{ color: "var(--text-muted)" }}
          >
            Pricing
          </span>
          <h2 className="text-white mb-4">Simple, Transparent Pricing</h2>
        </div>

        <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div
            className="border rounded-sm p-12 flex flex-col hover-bg-panel transition-all"
            style={{
              borderColor: "var(--border-medium)",
              backgroundColor: "var(--bg-panel)",
            }}
          >
            <h3 className="text-white text-lg mb-4">Starter</h3>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl font-display font-bold text-white">
                $99
              </span>
              <span style={{ color: "var(--text-muted)" }}>/month</span>
            </div>
            <ul
              className="list-none space-y-0 mb-8 flex-1"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <li
                className="py-3 border-b flex items-center gap-3"
                style={{
                  borderBottomColor: "var(--border-subtle)",
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--border-strong)",
                  }}
                >
                  →
                </span>
                10 test runs per month
              </li>
              <li
                className="py-3 border-b flex items-center gap-3"
                style={{
                  borderBottomColor: "var(--border-subtle)",
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--border-strong)",
                  }}
                >
                  →
                </span>
                Basic reporting
              </li>
              <li
                className="py-3 border-b flex items-center gap-3"
                style={{
                  borderBottomColor: "var(--border-subtle)",
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--border-strong)",
                  }}
                >
                  →
                </span>
                Email support
              </li>
            </ul>
            <Link href="#" className="btn btn-secondary w-full" aria-label="Get Started with Starter plan">
              Get Started
            </Link>
          </div>

          <div
            className="border rounded-sm p-12 flex flex-col relative hover-bg-panel transition-all"
            style={{
              borderColor: "var(--border-strong)",
              backgroundColor: "var(--bg-elevated)",
            }}
          >
            <span 
              className="absolute -top-3 right-4 bg-white text-black font-mono text-xs px-2 py-1 rounded-sm font-bold"
            >
              RECOMMENDED
            </span>
            <h3 className="text-white text-lg mb-4">Professional</h3>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl font-display font-bold text-white">
                $299
              </span>
              <span style={{ color: "var(--text-muted)" }}>/month</span>
            </div>
            <ul
              className="list-none space-y-0 mb-8 flex-1"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <li
                className="py-3 border-b flex items-center gap-3"
                style={{
                  borderBottomColor: "var(--border-subtle)",
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--border-strong)",
                  }}
                >
                  →
                </span>
                Unlimited test runs
              </li>
              <li
                className="py-3 border-b flex items-center gap-3"
                style={{
                  borderBottomColor: "var(--border-subtle)",
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--border-strong)",
                  }}
                >
                  →
                </span>
                Advanced analytics
              </li>
              <li
                className="py-3 border-b flex items-center gap-3"
                style={{
                  borderBottomColor: "var(--border-subtle)",
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--border-strong)",
                  }}
                >
                  →
                </span>
                Priority support
              </li>
              <li
                className="py-3 border-b flex items-center gap-3"
                style={{
                  borderBottomColor: "var(--border-subtle)",
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--border-strong)",
                  }}
                >
                  →
                </span>
                API access
              </li>
            </ul>
            <Link href="#" className="btn btn-primary w-full" aria-label="Start Free Trial for Professional plan">
              Start Free Trial
            </Link>
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