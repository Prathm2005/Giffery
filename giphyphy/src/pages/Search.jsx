import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Gifstate } from '../context/Contextapi';
import Searchgif from '../components/Searchgif';
import Gif from '../components/Gif';
const Search = () => {
  const [searchResults, setSearchResults] =useState([]);
  const {gf,filter}=Gifstate();
  const {query}=useParams();
  const fetchsearch= async()=>{
    const {data}= await gf.search(query,{
      sort: "relevant",
      lang: "en",
      type: filter,
      limit: 20,
    });
    setSearchResults(data);
  }

  useEffect (()=>{
    fetchsearch();
  },[filter])
  return (
    <div className="my-4">
      <h2 className="text-5xl pb-3 font-bold">{query}</h2>
      {/* <Searchgif  alighLeft={true}/> */}
      {searchResults.length>0 ?(
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
        {searchResults.map((gif) => (
          <Gif gif={gif} key={gif.id} />
        ))}
      </div>
      ): <span>Oops! No GIF'S found...</span>}

     
    </div>
  )
}

export default Search 