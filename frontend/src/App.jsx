import { useState } from "react";
import Current from "./components/Current";
import Header from "./components/Header";
import Runway from "./components/Runway";
import Search from "./components/Search";
import Chip2 from "./components/Chip2";

const API = import.meta.env.VITE_API_URL;

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (icao) => {
    if (!icao) return;
    setLoading(true);
    try {
      const res = await fetch(`${API}/data?icao=${icao}`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error(err);
      alert("COMMAND_ERROR: STATION NOT FOUND");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] font-mono p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <Header />
        
        <Search onSearch={fetchWeather} loading={loading} />

        {data && (
          <div className="mt-12 space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
            {/* Top Stats Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <Chip2 type="FLIGHT_CATEGORY" value={data.fltCat} />
              </div>
              <div className="border border-[#262626] bg-[#121212] p-5 flex flex-col justify-center">
                <p className="text-[10px] text-[#737373] font-bold tracking-widest">STATION_NAME</p>
                <p className="text-lg font-black text-white truncate uppercase">{data.stationName}</p>
              </div>
            </div>

            <Current data={data} />

            {/* Cloud Matrix */}
            <div>
              <p className="text-[10px] text-[#737373] mb-4 font-bold tracking-[0.3em]">CLOUD_DECODER</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {data.clouds?.length > 0 ? data.clouds.map((c, i) => (
                  <div key={i} className="border-l-2 border-blue-500 bg-[#121212] p-3">
                    <p className="text-[10px] text-[#737373] font-bold uppercase">{c.cover}</p>
                    <p className="text-md font-bold">{c.base} FT</p>
                  </div>
                )) : <p className="text-xs text-[#404040]">CLR // NO_CLOUDS_DETECTED</p>}
              </div>
            </div>

            <Runway runways={data.runways} />
          </div>
        )}

        {!data && !loading && (
          <div className="mt-20 border border-[#171717] h-40 flex items-center justify-center italic text-[#404040] text-sm tracking-widest">
            AWAITING_ICAO_INPUT_FOR_UPLINK...
          </div>
        )}
      </div>
    </div>
  );
}

export default App;