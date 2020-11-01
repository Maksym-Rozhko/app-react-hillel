import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ItemList from './components/ItemList/ItemList';
import BasketContainer from './components/BasketContainer/BasketContainer';
import ItemInfo from './components/ItemInfo/ItemInfo';
import Header from './components/Header/Header';

export default function Store() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/products/:productId'>
            <ItemInfo></ItemInfo>
          </Route>
          <Route path='/' exact>
            <HomePage></HomePage>
          </Route>
          <Route path='/products'>
            <ItemList></ItemList>
          </Route>
          <Route path='/basket'>
            <BasketContainer></BasketContainer>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
