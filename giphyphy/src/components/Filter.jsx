import React from "react";
import { Gifstate } from "../context/Contextapi";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
const filters = [
    {
      title: "GIF's",
      value: "gifs",
      background:
        "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500", // warm gradient
    },
    {
      title: "Stickers",
      value: "stickers",
      background:
        "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500", // fresh green tone
    },
    {
      title: "Text",
      value: "text",
      background:
        "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500", // cool blue tone
    },
  ];
  
const Filter = ({ alighLeft = false, showTrending = false }) => {
  const { filter, setFilter } = Gifstate();
  return (
    <div
      className={`flex my-3 gap-3 ${alighLeft ? "" : "justify-end"} ${
        showTrending
          ? "justify-between flex-col sm:flex-row sm:items-center"
          : ""
      }`}
    >
      {showTrending && (
        <span className="flex gap-2">
          {showTrending && (
            <HiMiniArrowTrendingUp size={25} clasname="text-teal-400" />
          )}
          <span className="font-semibold  text-gray-400">Trending Gif's</span>
        </span>
      )}
      <div className="flex min-w-80  bg-gray-700">
        {filters.map((f) => {
          return (
            <span
              onClick={() => setFilter(f.value)}
              className={`${filter===f.value?f.background:""}font-semibold py-2 w-1/3 text-center  cursor-pointer`}
              key={f.title}
            >
              {f.title}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
