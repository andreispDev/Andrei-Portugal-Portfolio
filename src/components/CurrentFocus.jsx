import { BookOpen, Target, Sparkles } from "lucide-react";

const FOCUS_AREAS = [
  {
    icon: BookOpen,
    tag: "Learning",
    title: "System Design Fundamentals",
    description:
      "Deepening my understanding of scalable architecture, load balancing, and distributed systems patterns.",
    progress: 65,
    accent: "text-orange-500",
    accentBg: "bg-orange-50",
    barColor: "bg-orange-500",
  },
  {
    icon: Target,
    tag: "Building",
    title: "Security-Focused SaaS Project",
    description:
      "Building an end-to-end SaaS application focused on authentication, authorization, and secure multi-tenant architecture.",
    progress: 40,
    accent: "text-gray-900",
    accentBg: "bg-gray-100",
    barColor: "bg-gray-900",
  },
  {
    icon: Sparkles,
    tag: "Exploring",
    title: "AI-Assisted Development",
    description:
      "Investigating how LLM tooling fits into real engineering workflows, from prototyping to code review.",
    progress: 55,
    accent: "text-gray-900",
    accentBg: "bg-gray-100",
    barColor: "bg-gray-900",
  },
];

function FocusCard({
  icon: Icon,
  tag,
  title,
  description,
  progress,
  accent,
  accentBg,
  barColor,
}) {
  return (
    <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:border-gray-200 hover:shadow-md transition-all duration-200 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div
          className={`w-9 h-9 rounded-lg flex items-center justify-center ${accentBg}`}
        >
          <Icon className={`w-4 h-4 ${accent}`} />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
          {tag}
        </span>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mb-1.5">{title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed flex-1">
        {description}
      </p>

      <div className="mt-5 pt-4 border-t border-gray-50">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-medium text-gray-400">
            Progress
          </span>
          <span className="text-[10px] font-bold text-gray-700">
            {progress}%
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
          <div
            className={`h-full rounded-full ${barColor} transition-all duration-700`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function CurrentFocus() {
  return (
    <section className="py-24 bg-gray-50/50 border-t border-gray-100 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-2">
            Growth
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Currently Learning
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            What I'm actively studying and building right now, beyond finished
            projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FOCUS_AREAS.map((area) => (
            <FocusCard key={area.title} {...area} />
          ))}
        </div>
      </div>
    </section>
  );
}
