export default function GlassCard({ prop, className }) {
  return (
    <div
      className={`w-[200px] h-[120px] glass-card ${className} flex justify-center items-center text-xl`}
    >
      <p className="opacity-70 text-center">{prop}</p>
    </div>
  );
}
