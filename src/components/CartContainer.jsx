import './CartContainer.css';

function CartContainer(props) {
  function handleDelete() {
    props.deleteCart(props.id, props.price);
  }

  return (
    <div className="cartContainer">
      <hr />
      <div className="cartWindow">
        {props.cartSize ? <h1>Shopping Cart ({props.cartSize} items)</h1> : <h1>The cart is empty!</h1>}
        {props.cart.map(props.renderCart)}
      </div>
      <hr />
    </div>
  );
}

export default CartContainer;
