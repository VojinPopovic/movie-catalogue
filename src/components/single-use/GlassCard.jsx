import { formatDate } from "@/libs/formatDate";

export default function GlassCard({ prop, className, date }) {
  return (
    <div
      className={`w-[250px] h-[40px] xs:w-[200px] xs:h-[50px] md:h-[120px] glass-card ${className} flex justify-center items-center text-sm xs:text-base md:text-xl`}
    >
      <p className="opacity-70 text-center">{date ? formatDate(date) : prop}</p>
    </div>
  );
}
