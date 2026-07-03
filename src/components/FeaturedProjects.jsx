import {
  LineChart,
  ShieldCheck,
  ShoppingBag,
  Cloud,
  Cpu,
  Database,
} from "lucide-react";

const projects = [
  {
    title: "Threat Incident Reporting System",
    category: "Security Information System",
    description:
      "Web-based reporting system for documenting, tracking, and analyzing insider threat incidents with comprehensive reports and historical records.",
    icon: LineChart,
    iconColor: "text-orange-500/80",
    gradient: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700",
    image:
      "https://cdn.prod.website-files.com/5b5729421aca332c60585f78/61ba1a76b86f7c0573e04541_tier-11-long-form-landing-page-example.png",
    tags: ["TypeScript", "React", "Node.js", "Socket.io", "MySQL"],
  },
  {
    title: "Aegis IAM Gateway",
    category: "Cybersecurity",
    description:
      "Enterprise single sign-on access broker architecture utilizing granular JSON Web Key validations and oauth layers.",
    icon: ShieldCheck,
    iconColor: "text-gray-400",
    gradient: "bg-gradient-to-br from-gray-800 to-gray-900",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9uKGn77b7h-KzYrVKFhG6aJnYt4yLIEcvPdvYt1lfnQ&s=10/800/450",
    tags: ["GoLang", "OAuth2", "Docker"],
  },
  {
    title: "Apex Commerce API",
    category: "E-Commerce",
    description:
      "Headless cart processing application suite complete with web-hook triggers handling structured localized inventories.",
    icon: ShoppingBag,
    iconColor: "text-orange-500/80",
    gradient: "bg-gradient-to-br from-gray-900 via-orange-950 to-gray-900",
    image: "https://picsum.photos/seed/apex-commerce/800/450",
    tags: ["Node.js", "Stripe", "Postgres"],
  },
  {
    title: "Stratus Pipeline Monitor",
    category: "DevOps Portal",
    description:
      "Telemetry dashboard plotting pipeline build intervals, metric health thresholds, and direct deployments indicators.",
    icon: Cloud,
    iconColor: "text-gray-400",
    gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    image: "https://picsum.photos/seed/stratus-pipeline/800/450",
    tags: ["React.js", "Tailwind", "Prometheus"],
  },
  {
    title: "Synapse Workflow Orchestrator",
    category: "Automation",
    description:
      "A low-code background task parser scheduling complex sequential crons across disparate server networks securely.",
    icon: Cpu,
    iconColor: "text-orange-500/80",
    gradient: "bg-gradient-to-br from-gray-900 to-amber-950",
    image: "https://picsum.photos/seed/synapse-workflow/800/450",
    tags: ["Python", "FastAPI", "RabbitMQ"],
  },
  {
    title: "Vortex Storage Sync",
    category: "Big Data",
    description:
      "High speed distributed multi-region object storage mapping system boasting intelligent asynchronous integrity validations.",
    icon: Database,
    iconColor: "text-gray-400",
    gradient: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",
    image: "https://picsum.photos/seed/vortex-storage/800/450",
    tags: ["Rust", "WASM", "SQLite"],
  },
];

function ProjectCard({ project }) {
  const Icon = project.icon;
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-gray-200">
      <div>
        <div
          className={`w-full aspect-video rounded-xl mb-5 relative overflow-hidden 
                     flex items-center justify-center ${project.gradient}`}
        >
          {/* Base grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />

          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          {/* Slanted preview image, edges feathered, revealed on hover at half opacity */}
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="absolute -right-6 -bottom-8 w-[75%] h-[130%] object-cover rounded-lg
                       opacity-0 rotate-[10deg] translate-x-6 scale-95
                       group-hover:opacity-50 group-hover:rotate-[-8deg] 
                       group-hover:translate-x-0 group-hover:scale-100
                       transition-all duration-500 ease-out"
            style={{
              maskImage:
                "radial-gradient(ellipse 80% 75% at center, black 35%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 75% at center, black 35%, transparent 75%)",
            }}
          />

          {/* Darken edge so the icon stays legible over the photo */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent
                       opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />

          {/* Logo, textured with noise, semi-transparent, crisp above the slanted photo */}
          <Icon
            className={`w-8 h-8 relative z-10 opacity-80 drop-shadow-lg
                       transition-all duration-500 ease-out
                       group-hover:opacity-100 group-hover:scale-110 ${project.iconColor}`}
          />
        </div>

        <span className="text-[10px] font-bold text-orange-500 uppercase tracking-wider">
          {project.category}
        </span>

        <h3 className="text-base font-bold text-gray-900 mt-1 mb-2">
          {project.title}
        </h3>

        <p className="text-xs text-gray-500 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="mt-6">
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-2 border-t border-gray-50">
          <a
            href="#"
            className="inline-flex items-center text-xs font-semibold text-gray-900 hover:text-orange-500"
          >
            <i data-lucide="external-link" className="w-3.5 h-3.5 mr-1.5" />
            Live Demo
          </a>

          <a
            href="#"
            className="inline-flex items-center text-xs font-semibold text-gray-500 hover:text-gray-900"
          >
            <i data-lucide="github" className="w-3.5 h-3.5 mr-1.5" />
            Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-2">
              Showcase
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Featured Projects
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              A curated collection of scalable digital products built from
              scratch.
            </p>
          </div>

          <span className="text-xs font-medium text-gray-400">
            Showing {projects.length} Selected Works
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
