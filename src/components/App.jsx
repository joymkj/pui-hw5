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
  const [sort, setSort] = useState('Name');

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
    return (
      <Product
        key={Inventory.id}
        id={Inventory.id}
        rollName={Inventory.name}
        rollPrice={Inventory.price}
        rollURL={Inventory.url}
        updateCart={updateCart}
      />
    );
  }

  function handleSort(sortSelection) {
    setSort(sortSelection);
    if (sortSelection === 'Name') Inventory.sort((a, b) => (a.name > b.name ? 1 : -1));
    else Inventory.sort((a, b) => (a.price > b.price ? 1 : -1));
  }

  return (
    <div className="App">
      <Navbar cartSize={cartSize} cartTotal={cartTotal} roll={latestRoll} showPopup={showPopup} />
      <div className="Gallery">
        <div className="menu">
          <input type="text" />
          <button>Search</button>
          <p style={{ display: 'inline' }}>sort by: </p>
          <select onChange={(e) => handleSort(e.target.value)}>
            <option value="Name">Name</option>
            <option value="Base Price">Base Price</option>
          </select>
        </div>
        {Inventory.map(renderRolls)}
      </div>
    </div>
  );
}

export default App;
