import CardList from "../CardList";
import { useState, useEffect, useContext } from 'react';
import { isCartPageContext } from "../App";

function Cart({ cart, handleRemoveFromCart}) {
    const [total, setTotal] = useState(0);
    
    useEffect(() => {
        setTotal(cart.reduce((sum, product) => sum + product.price, 0));
    }, [cart])

    const isCartPage = useContext(isCartPageContext);

    return(
        <>
            <h1>My Cart</h1>
            <p>Total price: ${total}</p>
            
            <CardList products={cart} cart={cart} handleRemoveFromCart={handleRemoveFromCart}/>

        </>
        
    )
    
}

export default Cart;