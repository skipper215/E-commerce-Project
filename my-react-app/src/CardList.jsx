import Card from './Card.jsx'

function CardList( { products }) {
    console.log(products)
    // each product in products mapped as a Card component
    const productList = products.map((product, index) => {
        return (
        <Card 
            key = {index}
            id = {index}
            img={product.img}
            name = {product.name}
            alt = {product.alt}
            price = {product.price}
        />)
    })

    return (
        <div className="cardDisplay"> 
            {productList}
        </div>
    )
}

export default CardList;