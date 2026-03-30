export default function Runway({ runways }) {
  return (
    <div className="pb-20">
      <p className="text-[10px] text-[#737373] mb-6 font-bold tracking-[0.3em] uppercase">RUNWAY_ID_CONFIGURATION</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#262626] border border-[#262626]">
        {runways?.length > 0 ? runways.map((r, i) => (
          <div key={i} className="bg-[#0A0A0A] p-6 hover:bg-[#121212] transition-colors group flex justify-between items-center">
            <div>
              <span className="text-xs text-[#525252] font-bold">RWY_IDENT</span>
              <p className="text-2xl font-black text-white group-hover:text-[#FACC15]">{r.id}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-[#525252] font-bold uppercase">{r.surface}</p>
              <p className="text-xs font-bold text-[#A3A3A3]">{r.dimension}</p>
            </div>
          </div>
        )) : <div className="bg-black p-4 text-xs text-[#404040]">NO_RUNWAY_DATA_RETURNED</div>}
      </div>
    </div>
  );
}