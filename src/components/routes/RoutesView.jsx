import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  AllItemsContainer,
  ItemContainer,
  AddItemFormContainer,
  EditItemFormContainer,
  AllItemsInCartContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>            
      <Route exact path="/" component={AllItemsContainer} />
      <Route exact path="/items" component={AllItemsContainer} />
      <Route exact path="/items/new" component={AddItemFormContainer} />
      <Route exact path="/items/:id" component={ItemContainer} />
      <Route exact path="/items/:id/edit" component={EditItemFormContainer} />
      
      <Route exact path="/shoppingCart/:id" component={AllItemsInCartContainer} />
    </Switch>
  );
};

//add later: <Route exact path="/shoppingCart" component={ShoppingCartContainer} />

export default RoutesView;
