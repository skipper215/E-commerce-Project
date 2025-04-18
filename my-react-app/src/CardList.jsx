import Card from './Card.jsx'

function CardList( { products, cart, handleAddToCart, handleRemoveFromCart, isCartPage }) {
    // each product in products mapped as a Card component

    const productList = products.map((product, index) => {
        return (
        <Card 
            key = {index}
            id = {product.id}
            img={product.img}
            name = {product.name}
            alt = {product.alt}
            price = {product.price}
            cart = {cart}
            onAddToCart = {handleAddToCart}
            onRemoveFromCart = {handleRemoveFromCart}
            isCartPage={isCartPage}
        />)
    })

    return (
        <div className="cardDisplay"> 
            {productList}
        </div>
    )
}

export default CardList;