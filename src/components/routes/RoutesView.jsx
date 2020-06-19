import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login, Signup} from '../containers';
import {AllItemsContainer,ItemContainer, ShoppingCartContainer,} from "../containers";

const RoutesView = () => {
  return (
    <Switch>            
      <Route exact path="/" component={AllItemsContainer} />
      <Route exact path="/items" component={AllItemsContainer} />
      <Route exact path="/items/:id" component={ItemContainer} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route component={Login} />
    </Switch>
  );
};

//add later <Route exact path="/shoppingCart" component={ShoppingCartContainer} />

export default RoutesView;
