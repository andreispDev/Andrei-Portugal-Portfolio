import { useState } from "react";

const smoothScrollTo = (href) => {
  const targetId = href.replace("#", "");
  const element = document.getElementById(targetId);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <nav className="glass-nav rounded-2xl px-6 py-3 flex items-center justify-between shadow-sm">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center text-white font-bold text-base transition-transform group-hover:scale-105">
              <span className="text-orange-500 font-extrabold">&lt;</span>/
            </div>
            <span className="font-bold text-gray-900 tracking-tight text-lg">
              Andrei<span className="text-orange-500">.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  smoothScrollTo(item.href);
                }}
                className={`nav-link text-sm font-medium relative py-1 transition-colors hover:text-gray-900 ${
                  item.href === "#home" ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                smoothScrollTo("#contact");
              }}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gray-900 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <span className="text-xl">✕</span>
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-x-0 top-[100px] mx-6 p-6 glass-nav rounded-2xl shadow-xl border border-gray-100 md:hidden z-40">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  smoothScrollTo(item.href);
                  setOpen(false);
                }}
                className="text-base font-medium text-gray-700 py-2 border-b border-gray-100"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                smoothScrollTo("#contact");
                setOpen(false);
              }}
              className="mt-2 inline-flex items-center justify-center w-full py-3 rounded-xl bg-gray-900 text-sm font-medium text-white"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
