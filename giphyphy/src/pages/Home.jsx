import React, { useEffect } from "react";
import { Gifstate } from "../context/Contextapi";
import Gif from "../components/Gif";
import Filter from "../components/Filter";
import Footer from "../components/Footer";

const Home = () => {
  const { gf, gifs, setGifs, filter } = Gifstate();

 
  const fetchTrendingGiphy = async () => {
    try {
      const { data } = await gf.trending({
        limit: 20,
        type: filter,
        rating: "g",
      });
      setGifs(data);
    } catch (error) {
      console.error("Error fetching trending GIFs:", error);
    }
  };

  useEffect(() => {
    fetchTrendingGiphy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <div className="p-4">
      {/* Welcome banner */}
      <div className="w-full bg-blue-500 text-white py-3 rounded-md shadow-md mb-4">
        <marquee behavior="scroll" direction="left" scrollamount="8">
          👋 Welcome to <strong>GIFFERY</strong> — Explore Trending GIFs & Have Fun! 🎉
        </marquee>
      </div>

      <Filter showTrending />

      {/* GIF Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3 mt-4">
        {gifs.length > 0 ? (
          gifs.map((gif) => <Gif gif={gif} key={gif.id} />)
        ) : (
          <p className="text-center text-gray-500 mt-6">No GIFs found 😢</p>
        )}
      </div>
    </div>
  );
};

export default Home;
