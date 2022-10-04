import './App.css';
import Navbar from './Navbar.jsx';
import Product from './Product.jsx';
import Inventory from './Inventory';
import MenuBar from './MenuBar';

import { useState, useEffect } from 'react';

function App() {
  const [cartSize, setCartSize] = useState(0);
  const [cartTotal, setCartTotal] = useState(0.0);
  const [latestRoll, setLatestRoll] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [cart, setCart] = useState([]);
  const [sort, setSort] = useState('Name');
  const [search, setSearch] = useState('');
  const [productList, setProductList] = useState(Inventory);
  const [searchMatch, setSearchMatch] = useState(true);

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

  function renderRolls(productList) {
    return (
      <Product
        key={productList.id}
        id={productList.id}
        rollName={productList.name}
        rollPrice={productList.price}
        rollURL={productList.url}
        updateCart={updateCart}
      />
    );
  }

  function handleSort(event) {
    setSort(event.target.value);
    if (event.target.value === 'Name') productList.sort((a, b) => (a.name > b.name ? 1 : -1));
    else productList.sort((a, b) => (a.price > b.price ? 1 : -1));
  }

  function handleSearch(event) {
    setSearch(event.target.value.toLowerCase());
    if (Inventory.filter((str) => str.name.toLowerCase().includes(event.target.value.toLowerCase())).length)
      setSearchMatch(true);
    else setSearchMatch(false);
  }

  function searchButtonClicked() {
    setProductList(Inventory.filter((str) => str.name.toLowerCase().includes(search)));
  }

  return (
    <div className="App">
      <Navbar cartSize={cartSize} cartTotal={cartTotal} roll={latestRoll} showPopup={showPopup} />
      <div className="Gallery">
        <MenuBar handleSearch={handleSearch} searchButtonClicked={searchButtonClicked} handleSort={handleSort} />
        {searchMatch || productList.length ? productList.map(renderRolls) : <p>No Match!</p>}
      </div>
    </div>
  );
}

export default App;
