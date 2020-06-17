import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AddItemFormView } from "../views";
import { addItemThunk } from "../../thunks";

class AddItemFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        price: 0,
        quantity: 0,
        category: "",  
        description: "",   
        imageURL: "https://via.placeholder.com/480x240?text=Placeholder", 
        isValidName: false,
        errors: {},
    };
  }

  handleChange = (e) => {
    if (e.target.name === "name") {
      this.setState({ name: e.target.value }, this.validateName);
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  validateName = () => {
    const { name } = this.state;
    let errors = { ...this.state.errors };
    // set a valid boolean to true
    let isValidName = true;
    // check if the value is valid
    if (name.length < 2) {
      // if not, set the value to false and add error message
      isValidName = false;
      errors.name = "Invalid item name";
    }
    //
    // setstate with isValidName
    if (isValidName) {
      errors.name = "valid name";
    }
    this.setState({ isValidName, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.isValidName)
    {
      this.setState({price: (this.state.price * 100)}, this.sendState);   
    } 
  };

  //fixes a bug when the view loaded before the data was updated
  sendState = async() => {        
    await this.props.addItem(this.state);
    this.props.history.push("/items");
  };

  render() {
    return (
      <>
        {/* Can potentially be extracted into its own ErrorMessage component */}
        {this.state.isValidName ? "" : this.state.errors.name}
        <AddItemFormView
          name={this.state.name}
          price={this.state.price}
          quantity={this.state.quantity}
          category={this.state.category}  
          description={this.state.description} 
          imageURL={this.state.imageURL}        
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    addItem: (item) => dispatch(addItemThunk(item, ownProps)),
  };
};

AddItemFormContainer.propTypes = {
    addItem: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(AddItemFormContainer);
