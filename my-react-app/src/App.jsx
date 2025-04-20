import { useState, useEffect, useContext, createContext } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"

import CardList from './CardList.jsx'
import Nav from './Nav.jsx'
import Banner from './Banner.jsx'
import SignIn from './pages/SignIn.jsx'
import Cart from './pages/Cart.jsx'
import LocalStorage from './LocalStorage.jsx'
import SignUp from './pages/SignUp.jsx'
import Account from './pages/Account.jsx'

export const isCartPageContext = createContext(false);

function App() {
  // Products 
  const rawProducts = [
    {img:"cargoPants.jpg", alt:"cargoPants", name:"Cargo Pants", price:30.00},
    {img:"mens-blazer.webp", alt:"mens-blazer", name: "Mens Blazer", price:100.00},
    {img:"zara-womens-blazer.webp", alt:"female-blazer", name:"Silk Blazer", price:130.00}
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsWithId = rawProducts.map(product => ({...product, id: crypto.randomUUID()}));
    setProducts(productsWithId);
  }, [])
  
  // Cart 
  const [cart, setCart] = LocalStorage("cart", []);

  const handleAddToCart = (product) => {
    const productWithCartId = {...product, cartId: crypto.randomUUID()}
    setCart([...cart, productWithCartId]);
    
    console.log("Cart:", productWithCartId);
  };

  const handleRemoveFromCart = (product) => {
    console.log(cart);
    setCart(cart.filter(item => {
      return item.cartId !== product.cartId}))
  }

  // Login
  const [isLoggedIn, setIsLoggedIn] = LocalStorage("isLoggedIn", false); 


  return (
    <>
      <Nav isLoggedIn={isLoggedIn}/> 
      <Routes> 
        <Route path="/" element={
          <>
            <Banner src="maleModel.webp" alt="modelBanner" src2="modelBanner.jpg" />
            <CardList products={products} cart={cart} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} isCartPage={false}/>
          </>
          
        } />
        
        {isLoggedIn ? (<Route path="/account" element={ <Account />} />) :
                      (<Route path="/sign-in" element={ <SignIn setIsLoggedIn={setIsLoggedIn}></SignIn>}/> )}
        <Route path="/cart" element={
          <isCartPageContext.Provider value={true}>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}/>
          </isCartPageContext.Provider>
          }/> 
      </Routes>
      
    </>
 
  )
}

export default App
