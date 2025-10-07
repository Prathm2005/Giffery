import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Gifstate } from '../context/Contextapi'
import Gif from '../components/Gif'
import Followme from '../components/Followme'

const Category = () => {
  const [searchResults, setSearchResults] = useState([]);
  const {gf} =   Gifstate();
  const {category}  =useParams();  

  const fetchsearch= async()=>{
    const {data} =await gf.gifs(category,category);
    setSearchResults(data)
  };

  useEffect(()=>{
    fetchsearch();
  },[category])
  return (
    <div className="flex flex-col sm:flex-row gap-5 my-4">
      <div className="w-full sm:w-72">
        {searchResults.length>0 && <Gif gif={searchResults[0]} hover={false}/>}
        <Followme/>
        <div className="w-full h-0.5 mt-6 bg-gray-800"/>
      </div>
      <div>
      <h2 className="text-4xl pb-1 font-extrabold capitalize">{category.split("-").join(" & ")}GIF's</h2>
      <h2 className="text-lg text-gray-400 pb-3 font-bold hover:text-gray-50 cursor-pointer">
          @{category}
        </h2>
        {searchResults.length>0 &&(
          <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
            {searchResults.slice(1).map((gif)=>{
              return <Gif gif={gif} key={gif.id}/>
            })}
          </div>
        )}
        </div>
    </div>
  )
}

export default Category