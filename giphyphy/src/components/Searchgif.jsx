import React, { useState } from "react";
import { HiMiniXMark, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Searchgif = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchgif = async () => {
    if (query.trim() === "") return;
    navigate(`/search/${query}`);
  };

  return (
    <div className="flex relative w-full mb-2">
    
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for GIFs or Stickers"
        className="w-full pl-4 pr-14 py-4 text-lg text-gray-800 bg-white border border-gray-300 rounded-l-md outline-none focus:ring-2 focus:ring-blue-400 transition"
      />

    
      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-1.5 transition"
        >
          <HiMiniXMark size={20} className="text-gray-700" />
        </button>
      )}

     
      <button
        onClick={searchgif}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-r-md flex items-center justify-center transition"
      >
        <HiOutlineMagnifyingGlass size={26} className="-scale-x-100" />
      </button>
    </div>
  );
};

export default Searchgif;
