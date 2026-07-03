const experienceData = [
  {
    period: "2024 - Present",
    title: "Senior Full Stack Engineer",
    company: "Enterprise Solutions Corp",
    description:
      "Lead developer for core financial dashboard migration project processing 2.4M transactions daily. Optimized load latencies by 42% via custom localized state synchronization caches.",
    skills: ["Next.js", "Go", "AWS"],
  },
  {
    period: "2022 - 2024",
    title: "Software Architect",
    company: "Apex SaaS Ventures",
    description:
      "Spearheaded decoupled cloud architecture transformation. Engineered asynchronous messaging pipelines utilizing Redis and Kafka brokers to streamline multi-tenant ingestion loops.",
    skills: ["Node.js", "Kafka", "Postgres"],
  },
  {
    period: "2020 - 2022",
    title: "Full Stack Developer",
    company: "Quantum Dev Labs",
    description:
      "Owned feature development life-cycles for B2B e-commerce frameworks. Coded custom payment processing system integrations adhering strictly to SOC2 and PCI compliance parameters.",
    skills: ["React", "Express", "MongoDB"],
  },
];

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex flex-col sm:flex-row items-start sm:justify-between mb-12 group">
      {/* Node */}
      <div className="absolute -left-[18px] sm:left-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-orange-500 -translate-x-1/2 z-10 top-1.5 transition-transform group-hover:scale-125" />

      {/* Left / Right Content */}
      <div
        className={`w-full sm:w-[45%] mb-2 sm:mb-0 ${
          isLeft ? "sm:text-right sm:pr-8" : "sm:order-2 sm:text-left sm:pl-8"
        }`}
      >
        <span className="inline-block text-xs font-semibold text-gray-500 group-hover:text-orange-500 bg-gray-100 group-hover:bg-orange-50 px-2.5 py-1 rounded-md mb-1 transition-colors">
          {item.period}
        </span>

        <h3 className="text-base font-bold text-gray-900">{item.title}</h3>

        <p className="text-xs font-medium text-gray-500">{item.company}</p>
      </div>

      <div
        className={`w-full sm:w-[45%] ${
          isLeft ? "sm:pl-8" : "sm:order-1 sm:text-right sm:pr-8"
        }`}
      >
        <div className="p-5 rounded-xl border border-gray-100 bg-white shadow-sm group-hover:shadow-md transition-shadow">
          <p className="text-xs text-gray-600 leading-relaxed">
            {item.description}
          </p>

          <div
            className={`mt-3 flex flex-wrap gap-1.5 ${
              !isLeft ? "sm:justify-end" : ""
            }`}
          >
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-mono"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 bg-gray-50/50 border-y border-gray-100 relative z-10 reveal"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-2">
            History
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Professional Experience
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            My journey as a developer, from learning the fundamentals to
            building real-world applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto pl-8 sm:pl-0">
          <div className="absolute left-3.5 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

          {experienceData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
