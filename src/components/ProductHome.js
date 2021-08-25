import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductHome({data}) {
  console.log(data)
  return (

    <div className="mt-6 cover-container flex flex-wrap justify-center">
        {data.data['hydra:member'].map((cover) => (
        <Link to="/product"> <img key={cover.id} src={cover.vignette} alt={cover.name} className="m-1 w-40 h-40 bg-vinylyellow"></img></Link>
      ))}   
      
    </div>
  )
}
