import PropTypes from 'prop-types';
import AddToCart from './AddToCart.jsx'

function Card({ product, cart, onAddToCart, onRemoveFromCart}) {

  return (
    <div className="card">
      <img src={product.img} alt={product.alt} />
      <p>{product.name}</p>
      <p>${product.price}</p>
      <AddToCart product={product} cart={cart} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart}/>
      
      </div>
  )
}

Card.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

Card.defaultProps = {
  img: "https://via.placeholder.com/150",
  alt: "Default image",
  name: "Default item",
  price: 0.00,
};

export default Card;