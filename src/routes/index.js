import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Home from '../pages/Home';
import Main from '../pages/Main';
import Galery from '../pages/Galery';
import Products from '../pages/Products';
import Contato from '../pages/Contato'
import Login from '../pages/Login';
import Registration from '../pages/Registration'
import UserArea from '../pages/UserArea';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>      
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/inicio" component={Main}/>
      <MyRoute exact path="/galeria" component={Galery}/>
      <MyRoute exact path="/produtos" component={Products} />
      <MyRoute exact path="/usuario" component={UserArea}/>
      <MyRoute exact path="/contato" component={Contato} />
      <MyRoute exact path="/login" component={Login} />
      <MyRoute exact path="/cadastro" component={Registration} />
      <MyRoute exact path="*" component={Page404} />
    </Switch>
  );
}
