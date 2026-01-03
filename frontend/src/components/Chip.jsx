export default function Chip(props){
    return (
        <>
        <div class="flex items-center gap-2 bg-[#E9F5F8] rounded-lg p-2">
            <span class="material-symbols-outlined text-xl text-[#3282B8]">
              {props.icon}
            </span>
            <div>
              <p class="text-sm font-medium text-[#3282B8]">{props.value}</p>
              <p class="text-xs text-[#5D6D7E]">{props.type}</p>
            </div>
          </div>
        </>
    )
}