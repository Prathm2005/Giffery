import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  HiEllipsisVertical,
  HiMiniBars3BottomRight,
} from "react-icons/hi2";
import { Gifstate } from "../context/Contextapi";
import Searchgif from "./Searchgif";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const { gf, favorites } = Gifstate();

  const fetchGifCategory = async () => {
    const { data } = await gf.categories();
    setCategories(data);
  };

  useEffect(() => {
    fetchGifCategory();
  }, []);

  return (
    <nav className=" sticky top-0 z-50 bg-gray-950 shadow-md">
      {/* --- TOP NAV --- */}
      <div className="flex justify-between items-center mb-2 sti">
        <div onClick={window.location.reload}>
        <Link  to="/" >
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg tracking-tight cursor-pointer hover:scale-105 transition-transform duration-300">
            GIFFERY
          </h1>
        </Link>
        </div>
        {/* --- CATEGORY LINKS (Desktop) --- */}
        <div className="font-bold text-md flex gap-2 items-center">
          {categories?.slice(0, 5)?.map((category) => (
            <Link
              key={category.name}
              to={`/${category.name_encoded}`}
              className="px-4 py-1 hover:bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 border-b-4 hidden lg:block"
            >
              {category.name}
            </Link>
          ))}

          {/* Ellipsis icon (more categories) */}
          <button
            onClick={() => setShowCategories(!showCategories)}
            className="hidden lg:block"
          >
            <HiEllipsisVertical
              size={35}
              className={`py-0.5 transition ease-in-out border-b-4 cursor-pointer ${
                showCategories
                  ? "bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600"
                  : "hover:bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600"
              }`}
            />
          </button>

          {/* Favorites */}
          {favorites.length > 0 && (
            <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded  lg:block">
              <Link to={"/favorites"}>Favorite GIF's</Link>
            </div>
          )}

          {/* --- Mobile Menu Button --- */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="block lg:hidden"
          >
            <HiMiniBars3BottomRight
              className="text-sky-400 cursor-pointer"
              size={28}
            />
          </button>
        </div>
      </div>

      {/* --- DESKTOP CATEGORIES (Ellipsis Menu) --- */}
      {showCategories && (
        <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 z-20">
          <span className="text-3xl font-extrabold">Categories</span>
          <hr className="bg-gray-200 opacity-50 my-5" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categories?.map((category) => (
              <Link
                className="font-bold"
                key={category.name}
                to={`/${category.name_encoded}`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* --- MOBILE MENU --- */}
      {showMobileMenu && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md z-30 rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2 text-gray-700">Categories</h3>
          <div className="flex flex-col gap-2">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/${category.name_encoded}`}
                onClick={() => setShowMobileMenu(false)}
                className="py-2 px-4 rounded-md hover:bg-sky-100 text-gray-700 font-semibold"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {favorites.length > 0 && (
            <div className="mt-4 border-t pt-2">
              <Link
                to={"/favorites"}
                onClick={() => setShowMobileMenu(false)}
                className="text-sky-600 font-semibold"
              >
                Favorite GIF's ❤️
              </Link>
            </div>
          )}
        </div>
      )}

      {/* --- SEARCH BAR --- */}
      <Searchgif />
    </nav>
  );
};

export default Header;
