const workflowSteps = [
  {
    id: 1,
    phase: "01 / DISCOVER",
    title: "Requirement Planning",
    description:
      "Understanding project goals, user needs, technical constraints, and business requirements to establish a clear roadmap before development begins.",
    highlight: true,
  },
  {
    id: 2,
    phase: "02 / DESIGN",
    title: "Architectural Layout",
    description:
      "Designing scalable system architecture, database models, application flows, and intuitive user interfaces that prioritize usability and maintainability.",
    highlight: false,
  },
  {
    id: 3,
    phase: "03 / DEVELOP",
    title: "Scalable Execution",
    description:
      "Building clean, modular, and maintainable code using modern technologies, with an emphasis on performance, testing, and best practices.",
    highlight: false,
  },
  {
    id: 4,
    phase: "04 / DEPLOY",
    title: "Optimized Delivery",
    description:
      "Deploying production-ready applications through continuous integration and delivery, while optimizing performance, monitoring reliability, and ensuring long-term scalability.",
    highlight: false,
  },
];

function WorkflowCard({ step }) {
  return (
    <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm flex flex-col justify-between hover:border-gray-200 hover:shadow-md transition-all duration-200">
      <div>
        <div
          className={`text-xs font-mono font-bold ${
            step.highlight ? "text-orange-500" : "text-gray-900"
          }`}
        >
          {step.phase}
        </div>

        <h3 className="text-base font-bold text-gray-900 mt-2 mb-1">
          {step.title}
        </h3>

        <p className="text-xs text-gray-500 leading-relaxed font-normal">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function Workflow() {
  return (
    <section className="py-24 relative z-10 reveal">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-2">
            Workflow
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            The Implementation Methodology
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            A structured workflow mapped directly to engineering excellence
            safely.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {workflowSteps.map((step) => (
            <WorkflowCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
