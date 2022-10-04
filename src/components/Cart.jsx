import './Cart.css';

function Cart(props) {
  function handleDelete() {
    props.deleteCart(props.id, props.price);
  }

  return (
    <div className="cartContainer">
      <hr />
      <div className="cartWindow">
        <div className="info">
          {props.cartSize ? <h1>Shopping Cart ({props.cartSize} items)</h1> : <h1>The cart is empty!</h1>}
          <h1 className="cartTotal">Total: $ {Math.abs(props.cartTotal).toFixed(2)}</h1>
        </div>
        {props.cart.map(props.renderCart)}
      </div>
      <hr />
    </div>
  );
}

export default Cart;
