import PropTypes from 'prop-types';

function Card(props) {

  return (
    <div className="card">
      <img src={props.img} alt={props.alt} />
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  )
}

Card.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
};

Card.defaultProps = {
  img: "https://via.placeholder.com/150",
  alt: "Default image",
  name: "Default item",
  price: "$0.00",
};

export default Card;