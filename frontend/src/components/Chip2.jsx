export default function Chip2(props) {
  let landingType = "";

  // Mapping abbreviations to full names
  if (props.value === "VFR") {
    landingType = "Visual Flight Rules";
  } else if (props.value === "IFR") {
    landingType = "Instrument Flight Rules";
  } else if (props.value === "MVFR") {
    landingType = "Marginal Visual Flight Rules";
  } else if (props.value === "LIFR") {
    landingType = "Low Instrument Flight Rules";
  } else {
    landingType = "Unknown Category";
  }

  return (
    <>
      <div className="flex items-center gap-3 bg-[#E9F5F8] rounded-lg p-3 w-full shadow-sm">
        <span className="material-symbols-outlined text-2xl text-[#3282B8]">
          {props.icon}
        </span>
        
        <div>
          {/* Displays: Visual Flight Rules */}
          <p className="text-sm font-bold text-[#1B2631] leading-tight">
            {landingType}
          </p>
          
          {/* Displays: VFR - FLIGHT TYPE */}
          <p className="text-[10px] text-[#5D6D7E] uppercase font-bold tracking-wider">
            {props.value} — {props.type}
          </p>
        </div>
      </div>
    </>
  );
}