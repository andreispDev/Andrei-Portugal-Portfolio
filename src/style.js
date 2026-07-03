export const styles = `
    body {
      font-family: "Inter", sans-serif;
      background-color: #ffffff;
      overflow-x: hidden;
    }

    /* Custom subtle background grid pattern */
    .bg-grid-pattern {
      background-size: 40px 40px;
      background-image:
        linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
    }

    /* Glassmorphism utility overrides */
    .glass-nav {
      background: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.6);
    }

    .glass-card {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(243, 244, 246, 0.8);
    }

    /* Hide scrollbar for clean UI elements */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }

    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    /* Premium custom scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #ffffff;
    }

    ::-webkit-scrollbar-thumb {
      background: #e5e7eb;
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #d1d5db;
    }

    /* Intersection Observer Animation Classes */
    .reveal {
      opacity: 0;
      transform: translateY(24px);
      transition:
        opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
        transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      will-change: transform, opacity;
    }

    .reveal.active {
      opacity: 1;
      transform: translateY(0);
    }

    @media (prefers-reduced-motion: reduce) {
      .reveal {
        transition: none;
        opacity: 1;
        transform: none;
      }

      .animate-float {
        animation: none;
      }

      .animate-infinite-scroll {
        animation: none;
      }
    }
   `;
