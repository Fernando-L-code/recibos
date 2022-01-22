import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {

  return (
    <div className="Header">
      <h1>
        <Link to="/"> Merch</Link>
      </h1>
      <h1>
        <Link to="/Recibos"> Merch</Link>
      </h1>
      <h1>
        <Link to="/Proveedores"> Merch</Link>
      </h1>
      <h1>
        <Link to="/Monedas"> Merch</Link>
      </h1>
      <h1>
        <Link to="/Usuarios"> Merch</Link>
      </h1>
  
    </div>
  );
};

export default Header;
