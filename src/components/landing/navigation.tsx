"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav
      className="fixed top-0 w-full h-15 bg-black/80 backdrop-blur-2xl border-b z-[100] flex items-center"
      style={{ borderBottomColor: "var(--border-subtle)" }}
    >
      <div className="container flex justify-between items-center w-full">
        <Link
          href="#"
          className="font-display font-bold text-xl text-white flex items-center gap-2"
        >
          HINTON
          <span className="inline-block w-2 h-4 bg-white animate-pulse"></span>
        </Link>
        <div className="flex gap-8">
          <Link
            href="#features"
            className="nav-link text-sm font-medium"
          >
            Capabilities
          </Link>
          <Link
            href="#workflow"
            className="nav-link text-sm font-medium"
          >
            Workflow
          </Link>
          <Link
            href="#pricing"
            className="nav-link text-sm font-medium"
          >
            Pricing
          </Link>
        </div>
        <button
          className="btn btn-secondary"
          style={{ padding: "0.4rem 1rem", fontSize: "0.75rem" }}
          aria-label="Init Agent"
        >
          Init Agent
        </button>
      </div>
    </nav>
  );
}