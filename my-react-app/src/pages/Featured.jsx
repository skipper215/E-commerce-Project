import CardList from "../CardList";

function Featured({ products, cart, handleAddToCart, handleRemoveFromCart }) {

    let featuredProducts = [{}];
    const displayProducts = () => {
        featuredProducts = products.filter((p) => {
            console.log(p.loc);
            return  p.loc.includes("featured");
        })
        console.log(featuredProducts);
        return <CardList products={featuredProducts} cart={cart} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart}/>
    }

    return(
       <>
        <h1> Featured Items: </h1>
        {displayProducts()}
       </> 
    )

}

export default Featured;