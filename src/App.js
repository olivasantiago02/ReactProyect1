import React, { useState } from 'react';
import Cart from './components/cart/Cart';
import ProductCard from './components/ProductCard/ProductCard';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RemeraEstampada from '../src/assets/images/RemeraEstampada.jpg';
import SummerSimpleRemera from '../src/assets/images/sweatershein.png';
import ShortsPage from './components/ShortsPage';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <div className="app">
        <div className="title-bar">
          <h1>OlivaStore</h1>
          <Cart cartItems={cartItems} />
        </div>
        <div className="top-bar">
          <Link to="/remeras" className="category-button">Remeras</Link>
          <Link to="/buzos" className="category-button">Buzos</Link>
          <Link to="/shorts" className="category-button">Shorts</Link>
        </div>
        <div className="product-list-container">
          <Routes>
            <Route path="/remeras" element={<ProductCard
              id={1}
              title="Remera Estampada XL"
              price={24.99}
              images={[RemeraEstampada]}
              addToCart={addToCart}
            />} />
            <Route path="/buzos" element={<ProductCard
              id={2}
              title="Buzo Estampado California"
              price={23.99}
              images={[SummerSimpleRemera]}
              addToCart={addToCart}
            />} />
            <Route path="/shorts" element={<ShortsPage addToCart={addToCart} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
