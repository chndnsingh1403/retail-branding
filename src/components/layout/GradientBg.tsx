export default function GradientBg() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-24 left-1/2 h-72 w-[1200px] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-300/30 via-blue-300/20 to-cyan-300/30 blur-3xl" />
    </div>
  );
}
