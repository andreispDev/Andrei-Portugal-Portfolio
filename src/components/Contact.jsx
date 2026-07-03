import React from "react";

const contactItems = [
  {
    type: "link",
    href: "mailto:alex@example.com",
    icon: "mail",
    label: "Email Direct",
    value: "andreispdev@gmail.com",
    accent: true,
  },
  {
    type: "link",
    href: "https://www.linkedin.com/in/andreispdev",
    icon: "linkedin",
    label: "LinkedIn Professional",
    value: "in/andreispDev",
  },
  {
    type: "link",
    href: "https://github.com",
    icon: "github",
    label: "Source Repos",
    value: "github.com/andreispDev",
  },
  {
    type: "static",
    icon: "map-pin",
    label: "Location Base",
    value: "Manila, Philippines",
  },
];

function ContactCard({ item }) {
  const Wrapper = item.type === "link" ? "a" : "div";

  return (
    <Wrapper
      {...(item.type === "link"
        ? {
            href: item.href,
            target: item.href.startsWith("http") ? "_blank" : undefined,
            rel: item.href.startsWith("http")
              ? "noopener noreferrer"
              : undefined,
          }
        : {})}
      className={`p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 text-left transition duration-200
        ${item.type === "link" ? "bg-white group hover:shadow-md" : "bg-white/40"}
        ${item.accent ? "hover:border-orange-500/30" : "hover:border-gray-300"}
      `}
    >
      {/* Icon */}
      <div
        className={`
          w-9 h-9 rounded-lg flex items-center justify-center transition-colors
          ${
            item.accent
              ? "bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white"
              : "bg-gray-100 text-gray-700 group-hover:bg-gray-900 group-hover:text-white"
          }
        `}
      >
        <i data-lucide={item.icon} className="w-4 h-4" />
      </div>

      {/* Text */}
      <div>
        <span className="block text-[10px] font-medium text-gray-400 uppercase tracking-wider">
          {item.label}
        </span>
        <span className="text-xs font-semibold text-gray-800">
          {item.value}
        </span>
      </div>
    </Wrapper>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative z-10 reveal">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        {/* Label */}
        <div className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-2">
          Connect
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 max-w-xl">
          Let's Build Something Great Together
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-3 max-w-md leading-relaxed">
          Available for strategic enterprise roles, platform architectural
          consultation, and high-performance product engineering.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 w-full">
          {contactItems.map((item) => (
            <ContactCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
