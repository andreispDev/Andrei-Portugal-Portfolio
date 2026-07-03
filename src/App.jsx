import { useEffect } from "react";
import { styles } from "./style";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustMetrics from "./components/TrustMetrics";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import FeaturedProjects from "./components/FeaturedProjects";
import TechStackSection from "./components/TechStackSection";
import Workerflow from "./components/Workflow";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <style>{styles}</style>
      <div className="text-gray-800 antialised">
        <Background />
        <Navbar />
        <Hero />
        <TrustMetrics />
        <AboutSection />
        <ExperienceSection />
        <FeaturedProjects />
        <TechStackSection />
        <Workerflow />
        <Testimonials />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
