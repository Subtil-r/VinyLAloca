import React from 'react'

export default function TagsCat(fetch) {
  return (
    <div className="cat-container mx-6">
    {/* {fetch.default.map((cat) => (
    <div className="tag-container bg-vinylyellow w-max h-10 px-7 py-1 mx-1 my-3"> 
      <p className="font-semibold text-white text-lg capitalize">{cat}</p>
    </div>
    ))} */}
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
