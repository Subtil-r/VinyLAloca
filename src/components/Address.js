import React, { useState } from 'react'
import { PlusCircleIcon } from '@heroicons/react/outline'
import AddForm from './AddForm';
import { v4 } from 'uuid';

export default function Address() {
  
  const [addInsert, setAddInsert] = useState([]);

const addForm = () => {
  setAddInsert(addInsert.concat(<AddForm keyForm={v4()} />))
};


console.log(addInsert)
return (
  <div className="address-container col-span-full mx-5">
      
      <div className="add-addres grid grid-cols-5 mt-8 items-center  border-2 px-2 border-vinylpurple">
        <h3 className="text-center text-xl font-semibold text-vinylpurple my-5 uppercase col-span-3 ">Delivery Address</h3>
        <button id="plusAdd" className="tag-container bg-vinylyellow h-10 font-semibold text-white text-lg uppercase col-span-2 col-start-4" value="add" onClick={addForm}><PlusCircleIcon className="w-6 inline mr-2"/>new</button>
      </div> 
      {addInsert}
    </div>
  )
}
