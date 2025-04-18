import { useState, useEffect } from 'react'
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

  const rawProducts = [
    {img:"cargoPants.jpg", alt:"cargoPants", name:"Cargo Pants", price:30.00},
    {img:"mens-blazer.webp", alt:"mens-blazer", name: "Mens Blazer", price:100.00},
    {img:"zara-womens-blazer.webp", alt:"female-blazer", name:"Silk Blazer", price:130.00}];

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const productsWithId = rawProducts.map(product => ({...product, id: crypto.randomUUID()}));
    setProducts(productsWithId);
  }, [])
  
  const [cart, setCart] = useState([]);
  
  const handleAddToCart = (product) => {
    const productWithCartId = {...product, cartId: crypto.randomUUID()}
    console.log(productWithCartId);
    setCart([...cart, productWithCartId]);
    
    console.log("Cart:", productWithCartId);
  };

  const handleRemoveFromCart = (product) => {
    console.log(cart);
    setCart(cart.filter(item => {
      return item.cartId !== product.cartId}))
  }

  return (
    <>
      <Nav /> 
      <Routes> 
        <Route path="/" element={
          <>
            <Banner src="maleModel.webp" alt="modelBanner" src2="modelBanner.jpg" />
            <CardList products={products} cart={cart} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} isCartPage={false}/>
          </>
          
        } />
        <Route path="/sign-in" element={<SignIn />}/> 
        <Route path="/cart" element={<Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}/>}/> 
      </Routes>
      
    </>
 
  )
}

export default App
