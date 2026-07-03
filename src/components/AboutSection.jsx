import photo from "../assets/photo.jpeg";
import { Layout, Server, Database, Terminal } from "lucide-react";
import { IoLogoNodejs } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { BsTypescript } from "react-icons/bs";

const stackItems = [
  { icon: RiReactjsLine, className: "bg-slate-700 text-cyan-400" },
  { icon: BsTypescript, className: "bg-blue-900 text-white" },
  { icon: IoLogoNodejs, className: "bg-slate-600 text-green-500" },
];

const features = [
  {
    icon: Layout,
    title: "Frontend Dev",
    description:
      "Highly responsive layouts built with semantic accessibility frameworks.",
    iconWrapper: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: Server,
    title: "Backend Systems",
    description:
      "Decoupled logic microservices built to scale effortlessly under high loads.",
    iconWrapper: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    icon: Database,
    title: "Data Management",
    description:
      "Structured schema modeling, complex query normalization, and performance caching.",
    iconWrapper: "bg-gray-100",
    iconColor: "text-gray-900",
  },
];

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  iconWrapper,
  iconColor,
}) => (
  <div className="p-5 rounded-xl border border-gray-100 bg-white shadow-sm hover:border-gray-200 hover:shadow-md transition-all duration-200">
    <div
      className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${iconWrapper}`}
    >
      <Icon className={`w-4 h-4 ${iconColor}`} />
    </div>
    <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{description}</p>
  </div>
);

const StackBadge = ({ icon: Icon, className }) => (
  <div
    className={`w-7 h-7 rounded-full border-2 border-gray-900 flex items-center justify-center ${className}`}
  >
    <Icon className="w-4 h-4" />
  </div>
);

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10 reveal">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-2xl bg-gray-50 border border-gray-100 p-4 shadow-sm group">
              <div className="absolute inset-0 border border-orange-500/20 translate-x-3 translate-y-3 rounded-2xl -z-10 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5 duration-300" />

              <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900 shadow-inner ring-1 ring-white/10">
                {/* Photo */}
                <img
                  src={photo}
                  alt="Andrei Portugal"
                  className="absolute inset-0 w-full h-full object-cover object-right
                             scale-100 opacity-100
                             transition-all duration-500 ease-out
                             group-hover:scale-105 group-hover:opacity-95"
                />

                {/* Scrim: transparent at top, dark at bottom — keeps photo visible, text readable */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 via-gray-900/40 to-gray-950/95" />

                {/* Ambient glow accent */}
                <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-orange-500/25 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

                {/* Content */}
                <div className="relative z-10 h-full p-6 flex flex-col justify-between text-white">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg">
                      <Terminal className="w-5 h-5 text-orange-500" />
                    </div>
                  </div>

                  {/* Footer */}
                  <div>
                    <h4 className="text-2xl font-bold tracking-tight drop-shadow-sm">
                      Andrei Portugal
                    </h4>

                    <p className="mt-1 text-sm text-gray-300">
                      Junior Full Stack Developer
                    </p>

                    <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {stackItems.map((item, i) => (
                          <StackBadge key={i} {...item} />
                        ))}
                      </div>

                      <span className="text-xs font-mono text-gray-400">
                        Core Technologies
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-bold text-orange-500 tracking-widest uppercase">
              Overview
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Building modern applications with a focus growth.
            </h2>

            <p className="text-gray-500 text-base leading-relaxed">
              I enjoy building responsive, user-friendly web applications using
              modern technologies. I have hands-on experience developing
              full-stack applications, RESTful APIs, and database-driven systems
              with a focus on clean, maintainable code and great user
              experiences.
            </p>

            <p className="text-gray-500 text-base leading-relaxed">
              As a Junior Full Stack Developer, I'm continuously learning modern
              development practices and have a growing interest in integrating
              AI features into web applications to create smarter and more
              efficient solutions.
            </p>

            {/* FEATURE GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {features.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
