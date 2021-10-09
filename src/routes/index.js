import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Home from '../pages/Home';
import Main from '../pages/Main';
import Galery from '../pages/Galery';
import Login from '../pages/Login';
import Contato from '../pages/Contato'
import UserArea from '../pages/UserArea';
// import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>      
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/inicio" component={Main}/>
      <MyRoute exact path="/galeria" component={Galery}/>
      <MyRoute exact path="/login" component={Login} />
      <MyRoute exact path="/usuario" component={UserArea}/>
      <MyRoute exact path="/contato" component={Contato} />
      
      
    </Switch>
  );
}
// <MyRoute path="*" component={Page404} />