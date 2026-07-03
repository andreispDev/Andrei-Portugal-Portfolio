import { Layers, Cpu, Database } from "lucide-react";

const TECH_BADGES = [
  {
    label: "React",
    icon: Layers,
    position: "top-[-16px] right-[-16px]",
    color: "blue",
  },
  {
    label: "Node.js",
    icon: Cpu,
    position: "bottom-[-8px] left-[-24px]",
    color: "green",
  },
  {
    label: "SQL",
    icon: Database,
    position: "bottom-[33%] right-[-32px]",
    color: "purple",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-xs font-semibold tracking-wider text-orange-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Full Stack Developer
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Crafting scalable digital products with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-orange-500">
                modern tech
              </span>{" "}
              and exceptional UX.
            </h1>

            <p className="text-base sm:text-lg text-gray-500 max-w-xl leading-relaxed">
              Passionate about building reliable web applications that combine
              clean architecture, responsive design, and scalable solutions to
              solve real-world business challenges.
            </p>

            <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gray-900 text-sm font-semibold text-white shadow-md hover:bg-gray-800 hover:shadow-xl transition-all"
              >
                View Projects
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-[350px] aspect-square animate-float">
              {/* Glow background */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 opacity-10 blur-xl" />

              {/* Main Card */}
              <div className="absolute inset-0 rounded-3xl border border-gray-100 bg-white/60 backdrop-blur-md shadow-2xl p-6 flex flex-col justify-between overflow-hidden">
                {/* Window Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>

                  <div className="px-2.5 py-0.5 rounded-md bg-gray-100 text-[10px] font-mono text-gray-500">
                    production.env
                  </div>
                </div>

                {/* Code Block */}
                <div className="font-mono text-xs text-gray-700 flex-1 my-6 flex flex-col justify-center space-y-2">
                  <p className="text-orange-500">
                    <span className="text-gray-400">const</span> developer ={" "}
                    <span className="text-gray-900">{"{"}</span>
                  </p>

                  <p className="pl-4">
                    name:{" "}
                    <span className="text-gray-900">'Andrei Portugal'</span>,
                  </p>

                  <p className="pl-4">
                    role: <span className="text-gray-900">'Full Stack'</span>,
                  </p>

                  <p className="pl-4">
                    status:{" "}
                    <span className="text-green-600">'Ready to Build'</span>
                  </p>

                  <p className="text-orange-500">
                    <span className="text-gray-900">{"}"}</span>;
                  </p>
                </div>

                {/* Progress bar */}
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
                </div>
              </div>

              {/* Floating badges */}
              {TECH_BADGES.map((badge) => (
                <div
                  key={badge.label}
                  className={`absolute ${badge.position} glass-card shadow-lg px-3.5 py-2 rounded-xl flex items-center gap-2 border border-white/80`}
                >
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center bg-${badge.color}-50`}
                  >
                    <badge.icon
                      className={`w-3.5 h-3.5 text-${badge.color}-500`}
                    />
                  </div>
                  <span className="text-xs font-semibold text-gray-800">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
