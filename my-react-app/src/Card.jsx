import PropTypes from 'prop-types';
import AddToCart from './AddToCart.jsx'

function Card({ id, img, alt, name, price, cart, onAddToCart, onRemoveFromCart, isCartPage }) {
  const product = { id, img, alt, name, price }

  return (
    <div className="card">
      <img src={img} alt={alt} />
      <p>{name}</p>
      <p>${price}</p>
      <AddToCart product={product} cart={cart} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} isCartPage={isCartPage}/>
      
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