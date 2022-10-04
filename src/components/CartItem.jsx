import './CartItem.css';

function CartItem(props) {
  return (
    <div className="cartItem">
      <img src={process.env.PUBLIC_URL + props.url} width="150" alt="alternate text" />

      <div className="cartItemInfo">
        <p>{props.name}</p>
        <p>Glazing: {props.glazing}</p>
        <p>Pack Size: {props.packSize}</p>
        <p className="priceText">$ {props.price}</p>
        <button>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
