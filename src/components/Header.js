import React, { useContext } from 'react'
import { MenuContext } from 'react-flexible-sliding-menu';
//import Menu from './Menu'
//import CartShop from './CartShop'
import { MenuIcon } from '@heroicons/react/outline'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'



export default function Header({isAuth, checkAuth}) {
  
  let logStatus;
  
  const handleLogin = (e) => {
      checkAuth(false);
  };



  if(isAuth === false){
    logStatus = <Link to="/login"><button className="text-xs">login</button></Link>
 } else {
   logStatus = <Link to="/"><button className="text-xs" onClick={handleLogin}>logout</button></Link>
 };
    
  const { toggleMenu } = useContext(MenuContext);
  return (
    <div className="header-container border-b-4 border-vinylyellow h-28 bg-white flex justify-between items-center p-5">
      <MenuIcon className="w-10" onClick={toggleMenu}/>
      {/* <Link to="/"><h1 className="relative inline text-2xl font-bold tracking-widest">VinyLaloca</h1></Link> */}
      <Link to="/"><img src="/vinylalocalogo.png" alt="logo" className="relative inline text-2xl font-bold tracking-widest w-40" /></Link>
      <div className="flex flex-col items-center">
      {logStatus}     
      <Link to="/cart"><ShoppingCartIcon className="w-6"/></Link>
      
      </div>
    </div>
  )
}
