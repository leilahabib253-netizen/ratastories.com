"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "الرئيسية" },
  { href: "/writer", label: "كاتبة القصة" },
  { href: "/gallery", label: "معرض القصص" },
  { href: "/ideas", label: "أفكار" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#2a2a3a] bg-[#0a0a0f]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              R
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                RataStories
              </span>
              <span className="text-[10px] text-gray-400 -mt-1">ratastories.com</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  pathname === item.href
                    ? "bg-purple-600/20 text-amber-400"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/writer"
              className="btn-primary text-sm !py-2 !px-5"
            >
              ابدأ الكتابة
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-[#2a2a3a]">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium ${
                    pathname === item.href
                      ? "bg-purple-600/20 text-amber-400"
                      : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/writer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 btn-primary text-center text-sm"
              >
                ابدأ الكتابة
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}