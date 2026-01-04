import Chip from "./Chip";

export default function Current(props) {
    
  return (
    <>
      <div className="rounded-xl bg-white m-4 p-4 shadow-custom">
        <h3 className="mb-3 text-sm font-semibold text-[#3282B8] uppercase tracking-wide">
          Current Conditions
        </h3>
        <div className="mt-5 mb-5">
        <Chip icon="cell_tower" value={props.stationName}/>
        </div>
        <p className="font-mono text-sm text-text-dark mb-4 break-words">
          {props.rawMetar}
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Chip icon="thermostat" value={`${props.temp}`} type="Temp"/>
          <Chip icon="visibility" value={props.vis} type="Visibility"/>
          <Chip icon="altitude" value={props.alt} type="Altimeter"/>
           <Chip icon="air" value={props.wind} type="Wind"/>
        </div>
      </div>
    </>
  );
}
