const NAV_LINKS = [
  {
    title: "Navigation",
    links: [
      { label: "Home Base", href: "#home" },
      { label: "Core Portfolio", href: "#about" },
      { label: "Experience History", href: "#experience" },
    ],
  },
  {
    title: "Technical Specs",
    links: [
      { label: "Featured Works", href: "#projects" },
      { label: "System Stack", href: "#tech" },
      { label: "Inquire Direct", href: "#contact", highlight: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 border-t border-gray-100 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 items-start">
          {/* Brand */}
          <div className="md:col-span-5 space-y-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gray-900 flex items-center justify-center text-white font-bold text-sm">
                <span className="text-orange-500 font-extrabold">&lt;</span>/
              </div>
              <span className="font-bold text-gray-900 tracking-tight text-base">
                Andrei<span className="text-orange-500">.</span>
              </span>
            </a>

            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Developing high-performance web applications with scalable
              architectures, maintainable code, and seamless user experiences.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            {NAV_LINKS.map((section) => (
              <div key={section.title} className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  {section.title}
                </span>

                {section.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-xs transition-colors ${
                      link.highlight
                        ? "text-gray-500 hover:text-orange-500"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* Status */}
          <div className="md:col-span-3 flex flex-col md:items-end gap-2">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
              Developer Status
            </span>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-semibold border border-green-100">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
              Open to work opportunities
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
          <span>Developed by Andrei Portugal.</span>

          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900 transition-colors">
              MIT License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
