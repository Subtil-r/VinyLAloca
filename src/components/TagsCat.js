import React from 'react'
//import { useAxiosGet } from '../hook/FetchGet'

export default function TagsCat({tag}) {

    /* const url = "tags"
    
    let tag = useAxiosGet(url)
    console.log("these are my tags: ", tag) */
  return (
    <div className="cat-container mx-6">
     {tag.data['hydra:member'].map((cat) => (
    <div className="tag-container bg-vinylyellow w-max h-10 px-7 py-1 mx-1 my-3"> 
      <p className="font-semibold text-white text-lg capitalize">{cat.name}</p>
    </div>
    ))}  
    <div className="tag-container bg-vinylyellow w-max h-10 px-7 py-1 mx-1 my-3"> 
      <p className="font-semibold text-white text-lg capitalize">categoria</p>
    </div>
    <div className="tag-container bg-vinylyellow w-max h-10 px-7 py-1 mx-1 my-3"> 
      <p className="font-semibold text-white text-lg capitalize">categoriacategoria</p>
    </div>
    <div className="tag-container bg-vinylyellow w-max h-10 px-7 py-1 mx-1 my-3"> 
      <p className="font-semibold text-white text-lg capitalize">cat</p>
    </div>
    </div>
  )
}
