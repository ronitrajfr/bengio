"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t mt-16 py-16"
      style={{ borderTopColor: "var(--border-medium)" }}
    >
      <div className="container flex justify-between items-center">
        <Link href="#" className="font-display font-bold text-lg text-white">
          HINTON
        </Link>
        <div className="flex gap-6">
          <Link href="#" className="nav-link text-xs font-medium" aria-label="Documentation">
            Documentation
          </Link>
          <Link href="#" className="nav-link text-xs font-medium" aria-label="API Reference">
            API Reference
          </Link>
          <Link href="#" className="nav-link text-xs font-medium" aria-label="Support">
            Support
          </Link>
          <Link href="#" className="nav-link text-xs font-medium" aria-label="Privacy Policy">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}