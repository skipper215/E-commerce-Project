import { useState, useContext } from 'react'
import { isCartPageContext } from './App';

function AddToCart({ product, cart, onAddToCart, onRemoveFromCart}) {
    const cartItem = cart.find(item => item.id === product.id);
    const isCartPage = useContext(isCartPageContext);

    return(
        <>  
            {isCartPage ? 
            (<button onClick={() => onRemoveFromCart(cartItem)}>Remove from Cart</button>)
            :
            (<button onClick={() => onAddToCart(product)}>Add to Cart</button>)}
        </>
        
    )
}

export default AddToCart;