import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductHome({data}) {
  console.log(data)
  return (

    <div className="mt-6 cover-container flex flex-wrap justify-center">
      {data.data.map((cover) => (
        <Link to="/product"> <img src={cover.image} alt={cover.name} className="m-1 w-40 h-40 bg-vinylyellow" key={cover.id}></img></Link>
      ))} 
      
    </div>
  )
}
