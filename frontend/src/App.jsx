import { useState, useEffect } from "react";
import Current from "./components/Current";
import Header from "./components/Header";
import Runway from "./components/Runway";
import Search from "./components/Search";
import Chip2 from "./components/Chip2";

const API = import.meta.env.VITE_API_URL;

function App() {
  const [ICAO, setICAO] = useState("");
  const [weatherData, setWeatherData] = useState({
    stationName: "Waiting for input",
    rawMetar: "",
    temp: "--",
    vis: "--",
    alt: "--",
    wind: "--",
    runways: [],
    fltCat: "",
    clouds: [] // Added to store the cloud array from your API
  });

  async function fetchData() {
    try {
      // 1. Show fetching state immediately
      setWeatherData((prev) => ({ ...prev, stationName: "Fetching Data...." }));

      const response = await fetch(`${API}/data?icao=${ICAO}`);
      const data = await response.json();
      let name=data.stationName;
     
      setWeatherData({
        stationName: name,
        rawMetar: data.rawMetar,
        temp: `${data.temp}°C`, // Corrected syntax error from previous turn
        vis: data.vis,
        alt: data.alt,
        wind: data.wind,
        runways: data.runways || [],
        fltCat: data.fltCat,
        clouds: data.clouds || [] // Saving the cloud array
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      setWeatherData((prev) => ({ ...prev, stationName: "Error, please verify inputs" }));
    }
  }

  useEffect(() => {
    if (ICAO && ICAO.length >= 3) { 
      fetchData();
    }
  }, [ICAO]);

  return (
    <div className="overflow-x-hidden w-screen h-screen bg-[#F5F8FA] font-[outfit] overflow-y-auto">
      {/* Centered Header */}
      <div className="flex flex-col justify-center items-center py-4"> 
        <Header />
      </div>

      <Search setICAO={setICAO} />
      
      <Current 
        stationName={weatherData.stationName} 
        rawMetar={weatherData.rawMetar} 
        temp={weatherData.temp}
        vis={weatherData.vis} 
        alt={weatherData.alt} 
        wind={weatherData.wind}
      />

      {/* Optional: Cloud Layers Display */}
      {weatherData.clouds.length > 0 && (
        <div className="mx-5 mb-5 flex flex-wrap gap-2">
          {weatherData.clouds.map((layer, index) => (
            <div key={index} className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
              <p className="text-[10px] text-gray-400 font-bold uppercase">Cloud Layer</p>
              <p className="text-sm font-semibold text-gray-700">
                {layer.cover} @ {layer.base}ft
              </p>
            </div>
          ))}
        </div>
      )}

      <Runway runways={weatherData.runways} />
      
      {/* Flight Category Chip with dynamic full-name logic */}
      <div className="m-5"> 
        <Chip2 icon="flight" type="Approach Type" value={weatherData.fltCat}/> 
      </div>
    </div>
  );
}

export default App;