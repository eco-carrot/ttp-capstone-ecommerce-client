import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  AllItemsContainer,
  ItemContainer,
  AddItemFormContainer,
  EditItemFormContainer,
  AllItemsInCartContainer,  
  Login, Signup
} from "../containers";


const RoutesView = () => {
  return (
    <Switch>            
      <Route exact path="/" component={AllItemsContainer} />
      <Route exact path="/items" component={AllItemsContainer} />
      <Route exact path="/items/new" component={AddItemFormContainer} />
      <Route exact path="/items/:id" component={ItemContainer} />

      <Route exact path="/items/:id/edit" component={EditItemFormContainer} />
      
      <Route exact path="/shoppingCart" component={AllItemsInCartContainer} />

      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/logout" component={AllItemsContainer} />
      <Route component={Login} />

    </Switch>
  );
};

//add later: <Route exact path="/shoppingCart" component={ShoppingCartContainer} />

export default RoutesView;
