// src/pages/Contact.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './styles/Contact.css';

const Contact = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Contacto</h1>
        <p>Envíanos un mensaje a través del formulario de contacto.</p>
        <form>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
