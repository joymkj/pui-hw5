import './App.css';
import Navbar from './Navbar.jsx';
import Product from './Product.jsx';
import Inventory from './Inventory';

import { useState, useEffect } from 'react';

function App() {
  const [cartSize, setCartSize] = useState(0);
  const [cartTotal, setCartTotal] = useState(0.0);
  const [latestRoll, setLatestRoll] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [cart, setCart] = useState([]);

  const updateCart = (Roll) => {
    setCartSize(cartSize + 1);
    setCartTotal(cartTotal + parseFloat(Roll.price));
    setLatestRoll(Roll);
    cart.push(Roll);
    console.log(cart);
  };

  useEffect(() => {
    setShowPopup(true);
    let timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [cartSize]);

  function renderRolls(Inventory) {
    return <Product key={Inventory.id} id={Inventory.id} updateCart={updateCart} />;
  }

  return (
    <div className="App">
      <Navbar cartSize={cartSize} cartTotal={cartTotal} roll={latestRoll} showPopup={showPopup} />
      <div className="Gallery">{Inventory.map(renderRolls)}</div>
    </div>
  );
}

export default App;
