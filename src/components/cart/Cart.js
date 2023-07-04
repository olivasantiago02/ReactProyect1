import React from 'react';
import './Cart.css';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <img className="cart-logo" src={process.env.PUBLIC_URL + '/cart.png'} alt="Logo del carrito" />
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - Cantidad: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
