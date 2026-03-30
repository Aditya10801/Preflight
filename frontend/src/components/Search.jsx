import { useState } from "react";

export default function Search({ onSearch, loading }) {
  const [val, setVal] = useState("");

  const handleAction = (e) => {
    e.preventDefault();
    onSearch(val.toUpperCase().trim());
  };

  return (
    <form onSubmit={handleAction} className="relative group">
      <div className="flex border-2 border-white bg-black">
        <input
          className="flex-1 bg-transparent p-4 text-white outline-none font-bold uppercase tracking-widest placeholder:text-[#404040]"
          placeholder="SEARCH_ICAO..."
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button 
          type="submit"
          disabled={loading}
          className="bg-white text-black px-6 md:px-10 font-black hover:bg-[#FACC15] transition-colors uppercase text-xs tracking-tighter"
        >
          {loading ? "SEARCHING..." : "EXECUTE"}
        </button>
      </div>
      <div className="mt-2 h-1 w-full bg-[#171717] overflow-hidden">
        {loading && <div className="h-full bg-blue-500 animate-pulse w-full"></div>}
      </div>
    </form>
  );
}