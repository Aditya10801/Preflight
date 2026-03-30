export default function Current({ data }) {
  return (
    <div className="border border-[#262626] bg-[#0F0F0F]">
      <div className="bg-[#262626] text-[#A3A3A3] px-4 py-1 text-[9px] font-bold tracking-widest uppercase flex justify-between">
        <span>SENSOR_ARRAY_V2.1</span>
        <span>STABLE_CONNECTION</span>
      </div>
      
      <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        <Unit label="TEMP" val={data.temp} sub="CELSIUS" />
        <Unit label="VIS" val={data.vis} sub="STATUTE_MILES" />
        <Unit label="ALTIMETER" val={data.alt} sub="HG_UNITS" />
        <Unit label="WIND" val={data.wind} sub="KNOTS" color="text-[#FACC15]" />
      </div>

      <div className="border-t border-[#262626] p-6 bg-black">
        <p className="text-[10px] text-[#525252] font-bold mb-2 tracking-widest">RAW_METAR_STRING</p>
        <p className="text-xs text-[#A3A3A3] font-mono leading-relaxed break-all">
          {data.rawMetar}
        </p>
      </div>
    </div>
  );
}

const Unit = ({ label, val, sub, color = "text-white" }) => (
  <div>
    <p className="text-[10px] text-[#737373] font-bold tracking-widest mb-1">{label}</p>
    <p className={`text-xl font-black leading-none ${color}`}>{val || "--"}</p>
    <p className="text-[8px] text-[#404040] mt-1 font-bold">{sub}</p>
  </div>
);