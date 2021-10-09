import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from './styled';
import Button from '../Button';

export default function Header() {

  function handleClick(){

  }

  return (
    <Nav>
      <div id="logo">
        <Link to="/">
          <a href=" ">Goldo</a>
        </Link>
      </div>
      <div id="links">
        <Link to="/inicio">
          <a href=" ">Início</a>
        </Link>
        <Link to="/galeria">
          <a href=" ">Galeria</a>
        </Link>
        <Link to="/usuario">
          <a href=" ">Área do Usuário</a>
        </Link>
        <Link to="/login">
          <a href=" ">Login</a>
        </Link>
        <Link to="/contato">
          <Button onClick={handleClick}>Contato</Button>
        </Link>
      </div>
    </Nav>
  );
}
