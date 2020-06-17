import React, { Component } from "react";
import PropTypes from "prop-types";
import { ItemNameListView } from "../views";

class ItemNameListContainer extends Component {
  render() {
    return <ItemNameListView items={this.props.items} />;
  }
}

ItemNameListContainer.propTypes = { items: PropTypes.array };

export default ItemNameListContainer;