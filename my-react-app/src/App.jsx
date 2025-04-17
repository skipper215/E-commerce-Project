import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route } from "react-router-dom"

import CardList from './CardList.jsx'
import Nav from './Nav.jsx'
import Banner from './Banner.jsx'
import SignIn from './pages/SignIn.jsx'
import Cart from './pages/Cart.jsx'

function App() {

  const products = [
    {id:1, img:"cargoPants.jpg", alt:"cargoPants", name:"Cargo Pants", price:"$30.00"},
    {id:2, img:"mens-blazer.webp", alt:"mens-blazer", name: "Mens Blazer", price:"$100.00"},
    {id:3, img:"zara-womens-blazer.webp", alt:"female-blazer", name:"Silk Blazer", price:"$130.00"}

  ];

  const cart = [];

  return (
    <>
      <Nav /> 
      <Routes> 
        <Route path="/" element={
          <>
            <Banner src="maleModel.webp" alt="modelBanner" src2="modelBanner.jpg" />
            <CardList products={products} />
          </>
          
        } />
        <Route path="/sign-in" element={<SignIn />}/> 
        <Route path="/cart" element={<Cart />}/> 
      </Routes>
      
    </>
 
  )
}

export default App
