import React, { useState } from 'react';
import '../css/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">Loja de Roupas</div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="shopping-cart">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      </div>
    </nav>
  );
};

export default Navbar;
