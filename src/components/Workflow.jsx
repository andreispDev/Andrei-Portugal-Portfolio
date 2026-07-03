import React from "react";

const workflowSteps = [
  {
    id: 1,
    phase: "01 / DISCOVER",
    title: "Requirement Mapping",
    description:
      "Deep exploration inside project targets, infrastructure realities, constraint scoping, and strict scaling requirements parameters.",
    highlight: true,
  },
  {
    id: 2,
    phase: "02 / DESIGN",
    title: "Architectural Layout",
    description:
      "Structuring strict relational logic entity relationships blueprints, programmatic schema trees, and accessible high fidelity dynamic prototypes.",
    highlight: false,
  },
  {
    id: 3,
    phase: "03 / DEVELOP",
    title: "Scalable Execution",
    description:
      "Writing modular decoupled logic libraries accompanied by structural edge case execution suites validation parameters checking.",
    highlight: false,
  },
  {
    id: 4,
    phase: "04 / DEPLOY",
    title: "Optimized Delivery",
    description:
      "Continuous integration system profiling metrics tests, payload size minimizations, asset bundles compression, and final production pushes.",
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
