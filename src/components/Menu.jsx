import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button colorScheme="teal" onClick={toggleMenu} className="hamburger-button">&#9776;</Button>
      <div className={`menu-container ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu} className="menu-link">Home</Link>
        <Link to="/tareas" onClick={toggleMenu} className="menu-link">Tareas</Link>
        <Link to="/sobrenosotros" onClick={toggleMenu} className="menu-link">Sobre Nosotros</Link>
      </div>
    </div>
  );
}

export default Menu;

