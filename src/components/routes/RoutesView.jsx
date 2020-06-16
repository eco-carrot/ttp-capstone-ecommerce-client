import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  AllItemsContainer,
  ItemContainer
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>            
      <Route exact path="/items" component={AllItemsContainer} />
      <Route exact path="/items/:id" component={ItemContainer} />
    </Switch>
  );
};

export default RoutesView;
