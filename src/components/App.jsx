import './App.css';
import Navbar from './Navbar.jsx';
import Product from './Product.jsx';
import Inventory from './Inventory';
import MenuBar from './MenuBar';
import CartItem from './CartItem';
import Cart from './Cart';

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
  const [cartID, setCartID] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const updateCart = (Roll) => {
    Roll.id = cartID;
    setCartID(cartID + 1);
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
  }, [cartID]);

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

  function renderCart(cart) {
    return (
      <CartItem
        key={cart.id}
        id={cart.id}
        name={cart.type}
        url={'/assets/' + cart.type.replace(/ /g, '-').toLowerCase() + '.jpg'}
        glazing={cart.glazing}
        packSize={cart.packSize}
        price={cart.price}
        deleteCart={deleteCart}
      />
    );
  }

  function deleteCart(id, price) {
    setCartTotal(cartTotal - price);
    setCartSize(cartSize - 1);
    setCart(cart.filter((item) => item.id !== id));
  }

  function displayCart() {
    return <Cart cartSize={cartSize} renderCart={renderCart} cart={cart} cartTotal={cartTotal} />;
  }

  return (
    <div className="App">
      <Navbar
        cartSize={cartSize}
        cartTotal={cartTotal}
        roll={latestRoll}
        showPopup={showPopup}
        showCart={showCart}
        setShowCart={setShowCart}
      />
      {showCart ? displayCart() : ''}
      <div className="Gallery">
        <MenuBar handleSearch={handleSearch} searchButtonClicked={searchButtonClicked} handleSort={handleSort} />
        {searchMatch || productList.length ? productList.map(renderRolls) : <p>No Match!</p>}
      </div>
    </div>
  );
}

export default App;
