import React from 'react'
import Address from '../components/Address';
import { withRouter } from 'react-router';

const Profile = () => {
  return (
    <div className="profile-container">
        <h1 className="text-center text-3xl font-semibold text-vinylpurple my-5 uppercase">account</h1>
        <form className="mx-5 my-10 grid grid-cols-5 gap-5 items-center">
          
          <label htmlFor="fullName" className="text-vinylpurple uppercase leading-4 text-xs">full name</label>
          <input type="text" id="fullName" className="focus:outline-none border-b-2 border-vinylpurple text-vinylyellow h-10 col-span-4 p-4" placeholder="full name" />
          
          <label htmlFor="emailAd" className="text-vinylpurple uppercase leading-4 text-xs">email address</label>
          <input type="email" id="emailAd" className="focus:outline-none border-b-2 border-vinylpurple text-vinylyellow h-10 col-span-4 p-4" placeholder="your@email.com" />
          
          <label htmlFor="password" className="text-vinylpurple uppercase leading-4 text-xs">password</label>
          <input type="password" id="password" className="focus:outline-none border-b-2 border-vinylpurple text-vinylyellow h-10 col-span-4 p-4" placeholder="******" />
          
        </form>

          <Address/>
          
          <div className="mx-5 my-10 grid grid-cols-5 gap-5 items-center">
          <input type="submit" id="submit" className="tag-container bg-vinylyellow px-7 py-1 col-span-full font-semibold text-white text-lg uppercase mt-8" value="checkout" />
          </div>
          
      </div>
  )
}

export default withRouter(Profile); 
