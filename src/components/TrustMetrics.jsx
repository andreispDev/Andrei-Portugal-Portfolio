const METRICS = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "+", label: "Projects Done" },
  { value: 5, suffix: "+", label: "Modern Technologies" },
  { value: 100, suffix: "%", label: "Project Dedication" },
];

export default function TrustMetrics() {
  return (
    <section className="py-12 relative z-10 border-y border-gray-100 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-12">
          {METRICS.map((item, index) => (
            <div
              key={item.label}
              className={`flex flex-col items-center text-center group px-4 ${
                index !== METRICS.length - 1
                  ? "md:border-r border-gray-100"
                  : ""
              }`}
            >
              <span className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight flex items-center justify-center">
                {/* Counter placeholder (you can animate later) */}
                <span>{item.value}</span>
                <span className="text-orange-500">{item.suffix}</span>
              </span>

              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-2 group-hover:text-gray-900 transition-colors">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
