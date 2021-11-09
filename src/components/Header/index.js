import React from 'react';
import { Link } from 'react-router-dom';

import {BtnLogin ,Nav } from './styled';
import Button from '../Button';

export default function Header() {

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
        <Link to="/produtos">
          <a href=" ">Produtos</a>
        </Link>
        <Link to="/usuario">
          <a href=" ">Área do Usuário</a>
        </Link>
        <Link to="/contato">
          <a href=" ">Contato</a>
        </Link>
        <Link to="/login">
          <BtnLogin> Login </BtnLogin>
        </Link>
        <Link to="/cadastro">
          <Button>Cadastro</Button>
        </Link>
      </div>
    </Nav>
  );
}
