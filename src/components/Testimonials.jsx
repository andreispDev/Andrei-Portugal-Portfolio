const TESTIMONIALS = [
  {
    quote:
      "Alex engineered our data ingestion platform from standard slow execution up to a completely streamlined cloud microservice pipeline. Extreme ownership of architecture frameworks.",
    name: "Sarah Jenkins",
    role: "CTO at TechVanguard",
    initials: "SR",
    accent: "bg-gray-900",
  },
  {
    quote:
      "Exceptional visual logic understanding combined with powerful backend structures performance execution. Built our client system portal ahead of baseline projection targets safely.",
    name: "Marcus Brody",
    role: "VP of Product at LinearFlow",
    initials: "MB",
    accent: "bg-orange-500",
  },
  {
    quote:
      "Code maintainability standards remain clean and readable long after original integration iterations. A great collaborative engineer to interface with on technical specs.",
    name: "David Lang",
    role: "Engineering Director at ScaleOps",
    initials: "DL",
    accent: "bg-gray-700",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50/50 border-t border-gray-100 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-2">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Trusted by Engineering Leaders
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm flex flex-col justify-between"
            >
              {/* Quote */}
              <p className="text-xs text-gray-600 leading-relaxed italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-50">
                <div
                  className={`w-8 h-8 rounded-full ${t.accent} text-white font-bold text-xs flex items-center justify-center`}
                >
                  {t.initials}
                </div>

                <div>
                  <h4 className="text-xs font-bold text-gray-900">{t.name}</h4>
                  <p className="text-[10px] text-gray-400 font-medium">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
