export default function Background() {
  return (
    <>
      {/* Grid Background */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0 opacity-70" />

      {/* Top Left Glow */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-orange-500/5 to-transparent blur-[120px] pointer-events-none z-0 animate-pulse-subtle" />

      {/* Bottom Right Glow */}
      <div
        className="fixed bottom-[10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-bl from-orange-500/5 to-transparent blur-[100px] pointer-events-none z-0 animate-pulse-subtle"
        style={{ animationDelay: "2s" }}
      />
    </>
  );
}
