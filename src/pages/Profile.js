import React from 'react'

export default function Profile() {
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
          
          {/* <label htmlFor="confirmPass" className="text-vinylpurple uppercase leading-4 text-xs">confirm password</label>
          <input type="password" id="confirmPass" className="border-b-2 border-vinylpurple text-vinylyellow h-10 col-span-4 p-4" placeholder="******" /> */}
          
          <label htmlFor="country" className="text-vinylpurple uppercase leading-4 text-xs">country</label>
          <input type="text" id="country" className="focus:outline-none border-b-2 border-vinylpurple text-vinylyellow h-10 col-span-4 p-4" placeholder="country" />
          
          <label htmlFor="city" className="text-vinylpurple uppercase leading-4 text-xs">city</label>
          <input type="text" id="city" className="focus:outline-none border-b-2 border-vinylpurple text-vinylyellow h-10 col-span-4 p-4" placeholder="city" />
          
          <label htmlFor="address" className="text-vinylpurple uppercase leading-4 text-xs">address</label>
          <input type="text" id="address" className="focus:outline-none border-b-2 border-vinylpurple text-vinylyellow h-10 col-span-4 p-4" placeholder="address" />
          
          <label htmlFor="number" className="text-vinylpurple uppercase leading-4 text-xs">number</label>
          <input type="number" id="number" className="focus:outline-none border-b-2 border-vinylpurple text-vinylyellow h-10 col-span-4 p-4" placeholder="00" />
          
          <label htmlFor="zipCode" className="text-vinylpurple uppercase leading-4 text-xs">zip code</label>
          <input type="number" id="zipCode" className="focus:outline-none border-b-2 border-vinylpurple text-vinylyellow h-10 col-span-4 p-4" placeholder="0000" />
          
          
          <input type="submit" id="submit" className="tag-container bg-vinylyellow px-7 py-1 col-span-full font-semibold text-white text-lg uppercase mt-8" value="checkout" />
          
        </form>
      </div>
  )
}
