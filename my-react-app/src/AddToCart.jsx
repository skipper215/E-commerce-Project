import { useState } from 'react'

function AddToCart({ product, cart, onAddToCart, onRemoveFromCart, isCartPage}) {
    console.log(cart);

    const cartItem = cart.find(item => item.id === product.id);

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