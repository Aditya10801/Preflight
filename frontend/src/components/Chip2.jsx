export default function Chip2(props) {
  let landingType = "";
  
  // Define colors for each aviation category
  const colorMap = {
    VFR:  { bg: "bg-green-100",  text: "text-green-700",  icon: "text-green-600" },
    MVFR: { bg: "bg-blue-100",   text: "text-blue-700",   icon: "text-blue-600" },
    IFR:  { bg: "bg-red-100",    text: "text-red-700",    icon: "text-red-600" },
    LIFR: { bg: "bg-purple-100", text: "text-purple-700", icon: "text-purple-600" },
    Default: { bg: "bg-gray-100", text: "text-gray-700",  icon: "text-gray-600" }
  };

  // Get current styles based on props.value
  const style = colorMap[props.value] || colorMap.Default;

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
    <div className={`flex items-center gap-3 ${style.bg} rounded-lg p-3 w-full shadow-sm transition-colors duration-300`}>
      <span className={`material-symbols-outlined text-2xl ${style.icon}`}>
        {props.icon}
      </span>
      
      <div>
        <p className={`text-sm font-bold ${style.text} leading-tight`}>
          {landingType}
        </p>
        
        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">
          {props.value} — {props.type}
        </p>
      </div>
    </div>
  );
}