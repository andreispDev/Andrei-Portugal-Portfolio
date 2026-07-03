import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiGithub,
  SiAstro,
  SiSupabase,
} from "react-icons/si";
import { TbApi } from "react-icons/tb"; // fallback for "REST API" (no brand mark)

const techStack = [
  {
    name: "React",
    color: "bg-blue-500",
    icon: SiReact,
    iconColor: "text-blue-500",
  },
  {
    name: "TypeScript",
    color: "bg-blue-600",
    icon: SiTypescript,
    iconColor: "text-blue-600",
  },
  {
    name: "JavaScript",
    color: "bg-yellow-500",
    icon: SiJavascript,
    iconColor: "text-yellow-500",
  },
  {
    name: "Tailwind CSS",
    color: "bg-teal-400",
    icon: SiTailwindcss,
    iconColor: "text-teal-400",
  },
  {
    name: "Node.js",
    color: "bg-green-500",
    icon: SiNodedotjs,
    iconColor: "text-green-500",
  },
  {
    name: "Express",
    color: "bg-gray-600",
    icon: SiExpress,
    iconColor: "text-gray-600",
  },
  {
    name: "MySQL",
    color: "bg-indigo-600",
    icon: SiMysql,
    iconColor: "text-indigo-600",
  },
  {
    name: "Github",
    color: "bg-orange-600",
    icon: SiGithub,
    iconColor: "text-orange-600",
  },
  {
    name: "Astro",
    color: "bg-zinc-600",
    icon: SiAstro,
    iconColor: "text-zinc-600",
  },
  {
    name: "REST API",
    color: "bg-zinc-600",
    icon: TbApi,
    iconColor: "text-zinc-600",
  },
  {
    name: "Supabase",
    color: "bg-teal-600",
    icon: SiSupabase,
    iconColor: "text-teal-600",
  },
];

function TechCard({ name, color, icon: Icon, iconColor }) {
  return (
    <div
      className="group relative overflow-hidden glass-card shadow-sm px-6 py-3.5 rounded-xl 
                 flex items-center justify-center gap-3 border border-gray-200/60 
                 hover:-translate-y-0.5 hover:shadow-md hover:border-gray-300/60 
                 transition-all duration-300"
    >
      {/* Slanted background watermark logo */}
      <Icon
        className={`pointer-events-none absolute -right-3 -bottom-4 w-16 h-16 
                    ${iconColor} opacity-0 rotate-[-18deg] scale-75
                    group-hover:opacity-[0.14] group-hover:scale-100 group-hover:rotate-[-12deg]
                    transition-all duration-500 ease-out`}
      />

      {/* Foreground content */}
      <span
        className={`relative z-10 w-2 h-2 rounded-full ${color} shrink-0`}
      />
      <span className="relative z-10 text-sm font-semibold text-gray-800 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function TechStackSection() {
  return (
    <section
      id="tech"
      className="py-20 bg-gray-50/50 border-y border-gray-100 overflow-hidden relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-10 text-center">
        <div className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-2">
          Ecosystem
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Modern Architecture Stack
        </h2>

        <div className="mt-8 flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
          {techStack.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
