import React, { useContext } from 'react'
import { MenuContext } from 'react-flexible-sliding-menu';
import { XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

export default function Menu() {
  const { toggleMenu } = useContext(MenuContext);
  return (
    <div className="menu-container p-8 h-screen w-screen absolute bg-white">
      <XIcon className="text-vinylyellow text-5xl font-bold w-14 inline" onClick={toggleMenu}/>
      {/* <h1 className="relative inline inset-x-14 top-0 text-2xl font-bold tracking-widest">VinyLaloca</h1>  */}
      <img src="/vinylalocalogo.png" alt="logo" className="relative inline inset-x-12 top-0 text-2xl font-bold tracking-widest w-48" /> 
      <ul className="mt-20">
        <li className="text-vinylpurple font-bold uppercase text-3xl leading-10 tracking-wide" onClick={toggleMenu}>
          <Link to="/">home</Link>
        </li>
        <li className="text-vinylpurple font-bold uppercase text-3xl leading-10 mt-2 tracking-wide" onClick={toggleMenu}>
          <Link to="/profile">profile</Link>
        </li>
        <li className="text-vinylpurple font-bold uppercase text-3xl leading-10 mt-2 tracking-wide" onClick={toggleMenu}>
          <Link to="/cart">cart</Link>
        </li>
        <li className="text-vinylpurple font-bold uppercase text-3xl leading-10 mt-2 tracking-wide" onClick={toggleMenu}>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </div>
  )
}
