import CardList from "../CardList";
import { useState, useEffect } from 'react';

function Cart({ cart, handleRemoveFromCart}) {
    const [total, setTotal] = useState(0);
    
    useEffect(() => {
        setTotal(cart.reduce((sum, product) => sum + product.price, 0));
    }, [cart])

    return(
        <>
            <h1>My Cart</h1>
            <p>Total price: ${total}</p>
            
            <CardList products={cart} cart={cart} handleRemoveFromCart={handleRemoveFromCart} isCartPage={true} />

        </>
        
    )
    
}

export default Cart;