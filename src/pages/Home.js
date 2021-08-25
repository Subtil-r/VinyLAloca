import React from 'react'
import ProductHome from '../components/ProductHome'
import TagsCat from '../components/TagsCat'


export default function Home({data, tag}) {
  return (
    <div className="home-container ">
      <ProductHome data={data}/>
      <TagsCat tag={tag}/>
    </div>
  )
}
