import React from 'react'
import { MinusCircleIcon, CheckCircleIcon } from '@heroicons/react/outline'


export default function AddForm({keyForm}) {
  return (
    <div>
      <form key={keyForm} id={keyForm} className="my-10 p-5 grid grid-cols-6 gap-6 items-center col-span-full rounded-md shadow-md">
          
          <label htmlFor="country" className="text-vinylpurple uppercase leading-4 text-xs">country</label>
          <input type="text" id="country" className="focus:outline-none border-b-2 border-vinylpurple text-vinylyellow h-10 col-span-5 p-4" placeholder="country" />
          
          <label htmlFor="city" className="text-vinylpurple uppercase leading-4 text-xs">city</label>
          <input type="text" id="city" className="focus:outline-none border-b-2 border-vinylpurple text-vinylyellow h-10 col-span-5 p-4" placeholder="city" />
          
          <label htmlFor="company" className="text-vinylpurple uppercase leading-4 text-xs">comp.</label>
          <input type="text" id="company" className="focus:outline-none border-b-2 border-vinylpurple text-vinylyellow h-10 col-span-5 p-4" placeholder="company" />
          
          <label htmlFor="address" className="text-vinylpurple uppercase leading-4 text-xs">address</label>
          <input type="text" id="address" className="focus:outline-none border-b-2 border-vinylpurple text-vinylyellow h-10 col-span-5 p-4" placeholder="address" />
          
          <label htmlFor="complement" className="text-vinylpurple uppercase leading-4 text-xs">compl.</label>
          <input type="text" id="complement" className="focus:outline-none border-b-2 border-vinylpurple text-vinylyellow h-10 col-span-5 p-4" placeholder="complement" />
          
          <label htmlFor="phone" className="text-vinylpurple uppercase leading-4 text-xs">phone</label>
          <input type="tel" id="phone" className="focus:outline-none border-b-2 border-vinylpurple text-vinylyellow h-10 col-span-5 p-4"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" placeholder="(00) 00-000-00-00" />

          <label htmlFor="number" className="text-vinylpurple uppercase leading-4 text-xs">num</label>
          <input type="number" id="number" className="focus:outline-none border-b-2 border-vinylpurple text-vinylyellow h-10 col-span-2 p-4" placeholder="00" />
          
          <label htmlFor="zipCode" className="text-vinylpurple uppercase leading-4 text-xs">post</label>
          <input type="number" id="zipCode" className="focus:outline-none border-b-2 border-vinylpurple text-vinylyellow h-10 col-span-2 p-4" placeholder="0000" />
          
          
          <button form={keyForm} type="submit" id="setAdd" className="tag-container bg-vinylyellow py-1 col-span-4 font-semibold text-white text-lg uppercase mt-8" value="set"><CheckCircleIcon className="w-6 py-1 inline mr-2"/>set</button>
          <button id="delAdd" className="tag-container bg-vinylyellow py-1 col-span-2 font-semibold text-white text-lg uppercase mt-8 " value="del"><MinusCircleIcon className="w-6 py-1 inline mr-2"/>del</button>
          
          
        </form>
    </div>
  )
}
