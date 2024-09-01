// src/pages/Products.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import './styles/Products.css'; 

const Products = () => {
  const handleAddToCart = () => {
    alert('Producto añadido al carrito.');
  };

  return (
    <div>
      <Header />
      <main>
        <h1>Productos</h1>
        <p>Aquí puedes encontrar nuestros productos disponibles.</p>
        <Button onClick={handleAddToCart}>Añadir al Carrito</Button>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
