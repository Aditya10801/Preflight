export default function Chip({ icon, value, type }) {
  return (
    <div className="flex items-center gap-3 p-3">
      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
        <span className="material-symbols-outlined text-lg">{icon}</span>
      </div>
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">{type}</p>
        <p className="text-sm font-bold text-slate-700 leading-none">{value}</p>
      </div>
    </div>
  );
}