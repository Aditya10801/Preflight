export default function Chip2(props) {
  return (
    <>
      <div className="flex items-center gap-3 bg-[#E9F5F8] rounded-lg p-2">
        <span className="material-symbols-outlined text-xl text-[#3282B8]">
          {props.icon}
        </span>
        
        {}
        <div className="bg-green">
          <p className="text-sm font-semibold text-[#3282B8] leading-tight">
            {props.value}
          </p>
          {props.type && (
            <p className="text-[10px] text-[#5D6D7E] uppercase font-medium">
              {props.type}
            </p>
          )}
        </div>
      </div>
    </>
  );
}