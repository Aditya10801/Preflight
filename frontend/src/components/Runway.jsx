import Chip from "./Chip";

export default function Runway({ runways }) {
  return (
    <div className="rounded-xl bg-white m-4 p-4 shadow-custom">
      <h3 className="mb-3 text-sm font-semibold text-[#3282B8] uppercase tracking-wide">
        Runway Information
      </h3>
      <div className="mt-5 mb-5 grid gap-3">
        {runways && runways.length > 0 ? (
          runways.map((runway, index) => (
            <Chip 
              key={index} 
              icon="flight_takeoff" 
              value={`Runway ${runway.id}`} 
              type={`${runway.dimension} - ${runway.surface}`}
            />
          ))
        ) : (
          <p className="text-sm text-gray-400">No runway data available</p>
        )}
      </div>
    </div>
  );
}