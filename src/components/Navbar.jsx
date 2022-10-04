import './Navbar.css';
import CartPopup from './CartPopup';

function Navbar(props) {
  return (
    <div className="Header">
      <div className="header">
        <img src={process.env.PUBLIC_URL + '/assets/logo-01.svg'} alt="Bun Bun bake shop logo" width="400" />
        <div className="navbar">
          <nav>
            <ul>
              <li className="current-page">
                <a href="">PRODUCTS</a>
              </li>
              <li>
                <a href="">CART</a>
              </li>
            </ul>
          </nav>
          <CartPopup roll={props.roll} cartSize={props.cartSize} showPopup={props.showPopup} />
          <p className="cart-info">
            {props.cartSize} items
            <br />
            Total: $ {props.cartTotal.toFixed(2)}
          </p>
          <hr />
          <h1>Our hand-made cinnamon rolls</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
