import {  createContext, useContext, useEffect, useState } from "react";
import {GiphyFetch} from "@giphy/js-fetch-api"
const GifContext = createContext();

const GifProvider=({children})=>{
    
    const [gifs,setGifs]= useState([]);
    const [filter,setFilter]= useState("gifs");
    const [favorites,setFavorites]= useState([]);
    const addFavorites=(id)=>{
        if(favorites.includes(id)){
            const updatefavroites= favorites.filter((itemid)=>itemid!==id);
            localStorage.setItem("favoritegif",JSON.stringify(updatefavroites));
            setFavorites(updatefavroites)
        }
        else{
            const updatefavroites=[...favorites];
            updatefavroites.push(id)
            localStorage.setItem("favoritegif",JSON.stringify(updatefavroites));
            setFavorites(updatefavroites)
        }
    };

    useEffect(()=>{
        const favoritesFromStorage  = JSON.parse(localStorage.getItem("favoritegif"))||[];
        setFavorites(favoritesFromStorage );
    },[])
    const gf= new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);
    return <GifContext.Provider value={{gf,gifs,setGifs,filter,setFilter,favorites,addFavorites}}>
        {children}
    </GifContext.Provider>
}

export const Gifstate= ()=>{
    return useContext(GifContext);
}

export default GifProvider;