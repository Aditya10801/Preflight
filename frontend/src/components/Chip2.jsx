export default function Chip2({ value, type }) {
  const styles = {
    VFR: "border-green-500 text-green-500 bg-green-500/5",
    MVFR: "border-blue-500 text-blue-500 bg-blue-500/5",
    IFR: "border-red-500 text-red-500 bg-red-500/5",
    LIFR: "border-purple-500 text-purple-500 bg-purple-500/5",
  };

  const currentStyle = styles[value] || "border-[#404040] text-[#404040]";

  return (
    <div className={`border-2 p-5 transition-all duration-500 ${currentStyle}`}>
      <p className="text-[10px] font-bold opacity-60 tracking-[0.2em] mb-1">{type}</p>
      <p className="text-3xl font-black italic tracking-tighter leading-none">{value || "STDBY"}</p>
    </div>
  );
}