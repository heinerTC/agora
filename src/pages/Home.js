// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import './styles/Home.css';

const Home = () => {
  const handleClick = () => {
    alert('¡Bienvenido a la página de inicio!');
  };

  return (
    <div>
      <Header />
      <main>
        <h1>Página de Inicio</h1>
        <p>Bienvenido a nuestra aplicación React.</p>
        <Button onClick={handleClick}>Haz clic aquí</Button>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
