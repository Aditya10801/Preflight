export default function Header() {
  return (
    <header className="pt-4 pb-12 flex justify-between items-end border-b border-[#171717] mb-8">
      <div>
        <h1 className="text-4xl font-black tracking-tighter text-white uppercase italic leading-none">
          ALTOS<span className="text-[#FACC15]">_</span>V3
        </h1>
        <div className="h-1.5 w-12 bg-[#FACC15] mt-2"></div>
      </div>
      <div className="text-right hidden sm:block">
        <p className="text-[10px] text-[#404040] font-black tracking-[0.4em]">SYS_OPERATIONAL_PROTOCOLS</p>
        <p className="text-[10px] text-[#737373] font-bold">LAST_UPLINK: {new Date().toLocaleTimeString()}</p>
      </div>
    </header>
  );
}