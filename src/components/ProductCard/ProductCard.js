import React, { useState, useEffect } from 'react';
import './ProductCard.css';

const ProductCard = ({ id, title, price, images, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [showDetails, setShowDetails] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    addToCart({ id, title, price, quantity });
  };

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="card">
      <div className="image-container">
        <img className="product-image" src={images[currentIndex]} alt={title} />
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-price">${price}</p>
      <div className="card-quantity">
        <label htmlFor={`quantity-${id}`}>Cantidad:</label>
        <input
          id={`quantity-${id}`}
          type="number"
          value={quantity}
          min="1"
          onChange={handleQuantityChange}
        />
      </div>
      <div className="button-container">
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Agregar al Carrito
        </button>
        <button className="details-button" onClick={handleToggleDetails}>
          {showDetails ? 'Ocultar detalles' : 'Ver detalles'}
        </button>
      </div>
      {showDetails && (
        <div className="product-details">
          <p>Detalles del producto:</p>
          <p>ID: {id}</p>
          <p>Caracteristicas: 100% Algodon</p>
          <p>Precio: ${price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
