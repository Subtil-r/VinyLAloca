import React from 'react'
import ProductHome from '../components/ProductHome'
import TagsCat from '../components/TagsCat'


export default function Home({data}) {
  return (
    <div className="home-container ">
      <ProductHome data={data}/>
      <TagsCat />
    </div>
  )
}
