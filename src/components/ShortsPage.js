import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import ShortsImage1 from '../assets/images/Shorts1.jpg';
import ShortsImage2 from '../assets/images/ShortsAlien.jpg';

const ShortsPage = ({ addToCart }) => {
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <h2>Shorts</h2>
      <div className="product-list">
        <ProductCard
          id={3}
          title="Shorts Deportivos"
          price={12.99}
          images={[ShortsImage1]} // Agrega la imagen a la lista de imágenes
          addToCart={handleAddToCart}
        />
        <ProductCard
          id={4}
          title="Shorts de Verano"
          price={15.99}
          images={[ShortsImage2]} // Agrega la segunda imagen a la lista de imágenes
          addToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default ShortsPage;
