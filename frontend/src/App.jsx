import Current from "./components/Current";
import Header from "./components/Header";
import Runway from "./components/Runway";
import Search from "./components/Search";
import Chip2 from "./components/Chip";
const API = import.meta.env.VITE_API_URL;



import { useState, useEffect } from "react";

function App() {
  const [ICAO, setICAO] = useState();
  const [weatherData, setWeatherData] = useState({
    stationName: "Waiting for input",
    rawMetar: "",
    temp: "",
    vis: "",
    alt: "",
    wind: "",
    runways: [],
    fltCat: ""
     // Add this to hold the array
  });

  async function fetchData() {
    try {
      const response = await fetch(`${API}/data?icao=${ICAO}`);
      const data = await response.json(); 
      
      setWeatherData({
        stationName: data.stationName,
        rawMetar: data.rawMetar,
        temp: `${data.temp}°C`,
        vis: data.vis,
        alt: data.alt,
        wind: data.wind,
        runways: data.runways || [],
        fltCat: data.fltCat
        // Save the runways array
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

 useEffect(() => {
  if (ICAO){ 
    setWeatherData({
      stationName: "Fetching Data....",
      
    })
    fetchData();}
}, [ICAO]);

  return (
    <div className="x-overflow-hidden w-screen h-screen bg-[#F5F8FA] font-[outfit] overflow-y-auto">
     <div className="flex flex-cols justify-center items-center"> <Header /></div>
      <Search setICAO={setICAO} />
      
      <Current 
        stationName={weatherData.stationName} 
        rawMetar={weatherData.rawMetar} 
        temp={`${weatherData.temp}`}
        vis={weatherData.vis} 
        alt={weatherData.alt} 
        wind={weatherData.wind}
      />

     
      <Runway runways={weatherData.runways} />
     <div className="m-5"> <Chip2 icon="flight_land" type="Flight Type" value={weatherData.fltCat}/> </div>
    </div>
  );
}

export default App;