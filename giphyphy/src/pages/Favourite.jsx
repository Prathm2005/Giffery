import React, { useEffect } from 'react'
import { useState } from 'react'
import { Gifstate } from '../context/Contextapi'
import Gif from '../components/Gif'

const Favourite = () => {

  const [favoritegifs,setFavoritesGifs]= useState([])

  const {gf,favorites}= Gifstate();
  const fetchFavoritesGif=async()=>{
    const {data:gifs}= await gf.gifs(favorites);
    setFavoritesGifs(gifs)
  };

  useEffect(()=>{
    fetchFavoritesGif();
  },[])
  return (
    <div className="mt-2">
      <span className="faded-text"> Favorites GIF's</span>
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2 mt-2">
        {favoritegifs.map((gif)=>{
          return<Gif   gif={gif} key={gif.id}/>
        })}
      </div>
    </div>
  )
}

export default Favourite