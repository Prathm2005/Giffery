import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Gifstate } from "../context/Contextapi";
import Gif from "../components/Gif";

import {  HiMiniHeart } from "react-icons/hi2";
import { FaPaperPlane } from "react-icons/fa6";

const contentType = ["gifs", "stickers", "texts"];

const Single = () => {
  const { type, slug } = useParams();
  const [gif, setGif] = useState();
  const [relatedGifs, setRelatedGifs] = useState([]);
  const [readMore, setReadMore] = useState(false);

  const { gf, addFavorites, favorites } = Gifstate();

  const fetchGif = async () => {
    try {
      const gifId = slug.split("-").pop();
      const { data } = await gf.gif(gifId);
      const { data: related } = await gf.related(gifId, { limit: 10 });

      setGif(data);
      setRelatedGifs(related);
    } catch (error) {
      console.error("Error fetching GIF:", error);
    }
  };

  useEffect(() => {
    if (!contentType.includes(type)) {
      console.warn("Invalid Type");
      return;
    }
    fetchGif();
  }, [type, slug]);

  const shareGif = () => {avigator.clipboard.write
    nText(window.location.href);
    alert("GIF link copied to clipboard!");
  };

  return (
    <div className="grid grid-cols-4 my-10 gap-4">

      {/* --- MAIN CONTENT --- */}
      <div className="col-span-4 sm:col-span-3">
        {gif && (
          <>
            <div className="flex gap-6">
              <div className="w-full sm:w-3/4">
                <div className="text-gray-400 mb-2">{gif.title}</div>
                <Gif gif={gif} hover={false} />

                {/* --- MOBILE USER DETAILS --- */}
                {gif?.user && (
                  <div className="flex sm:hidden gap-2 mt-2">
                    <img
                      src={gif?.user?.avatar_url}
                      alt={gif?.user?.display_name}
                      className="h-14 rounded-full"
                    />
                    <div>
                      <div className="font-bold">{gif?.user?.display_name}</div>
                      <div className="text-gray-400 text-sm">
                        @{gif?.user?.username}
                      </div>
                    </div>

                    <button className="ml-auto" onClick={shareGif}>
                      <FaPaperPlane size={22} />
                    </button>
                  </div>
                )}
              </div>

              {/* --- DESKTOP ACTION BUTTONS --- */}
              <div className=" sm:flex flex-col gap-5 mt-6">
                <button
                  onClick={() => addFavorites(gif.id)}
                  className="flex gap-3 items-center font-bold text-lg cursor-pointer"
                >
                  <HiMiniHeart
                    size={28}
                    className={`${
                      favorites.includes(gif.id) ? "text-red-500" : ""
                    }`}
                  />
                  Favorite
                </button>

                <button onClick={shareGif} className="flex gap-3 items-center font-bold text-lg">
                  <FaPaperPlane size={22} />
                  Share
                </button>

               
              </div>
            </div>

            {/* --- RELATED GIFS --- */}
            <div className="mt-6">
              <span className="font-extrabold text-lg">Related GIFs</span>
              <div className="columns-2 md:columns-3 gap-2 mt-3">
                {relatedGifs.map((gif) => (
                  <Gif gif={gif} key={gif.id} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Single;
