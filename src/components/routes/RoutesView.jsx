import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  AllItemsContainer,
  ShoppingCartContainer
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>            
      <Route exact path="/" component={AllItemsContainer} />
      <Route exact path="/items" component={AllItemsContainer} />
      
      <Route exact path="/shoppingCart/:id" component={ShoppingCartContainer} />
    </Switch>
  );
};
//<Route exact path="/shoppingCart" component={ShoppingCartContainer} />
export default RoutesView;
