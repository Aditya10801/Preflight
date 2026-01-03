import { useState } from "react";

export default function Search({ setICAO }) {
  // 1. Local state to track the text as the user types
  const [localValue, setLocalValue] = useState("");

  return (
    <div className="relative mb-6 mx-5">
      <input
        className="w-full rounded-xl border-none bg-white shadow-sm py-3 pl-5 pr-24 text-[#2C3E50] placeholder-gray-400 focus:ring-2 focus:ring-[#3282B8]"
        placeholder="ICAO"
        type="text"
        // 2. Controlled input: updates local state only
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
      />

      <div className="absolute inset-y-0 right-0 flex items-center pr-2">
        <button
          className="bg-[#E9F5F8] text-[#3282B8] px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-[#d4ebf2] transition-colors"
          onClick={() => {
            // 3. Update the App's ICAO state only on click
            const formattedValue = localValue.trim().toUpperCase();
            setICAO(formattedValue);
            console.log("Searching for:", formattedValue);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}