import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductHome() {
  return (
    <div className="mt-6 cover-container flex flex-wrap justify-center">
      <Link to="/product"> <img alt="record cover" className="m-1 w-40 h-40 bg-vinylyellow"></img></Link>
      <img alt="record cover" className="m-1 w-40 h-40 bg-vinylyellow"></img>
      <img alt="record cover" className="m-1 w-40 h-40 bg-vinylyellow"></img>
      <img alt="record cover" className="m-1 w-40 h-40 bg-vinylyellow"></img>
    </div>
  )
}
