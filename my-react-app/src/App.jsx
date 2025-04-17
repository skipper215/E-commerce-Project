import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CardList from './CardList.jsx'
import Nav from './Nav.jsx'
import Banner from './Banner.jsx'

function App() {

  const products = [
    {id:1, img:"cargoPants.jpg", alt:"cargoPants", name:"Cargo Pants", price:"$30.00"},
    {id:2, img:"mens-blazer.webp", alt:"mens-blazer", name: "Mens Blazer", price:"$100.00"},
    {id:3, img:"zara-womens-blazer.webp", alt:"female-blazer", name:"Silk Blazer", price:"$130.00"}

  ]

  return (
    <>
      <Nav /> 
      <Banner src="maleModel.webp" alt="modelBanner" src2="modelBanner.jpg"></Banner>
      <CardList products={products} />
    </>
 
  )
}

export default App
