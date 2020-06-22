import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { EditItemFormView } from "../views";
import { fetchItemThunk, editItemThunk } from "../../thunks";

class EditItemFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        price: "",
        quantity: "",
        category: "",  
        description: "",   
        imageURL: "https://via.placeholder.com/480x240?text=Placeholder", 
        isValidName: true,
        errors: {},
    };
  }

  componentDidMount() {
    this.props.fetchItem(this.props.match.params.id).then(({ payload }) => {
      this.setState(payload);
      this.setState({price: (this.state.price/100).toFixed(2)});
    });    
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
      
    if (this.state.isValidName)    {
      
      this.setState({price: (this.state.price * 100)}, this.sendState);
    } 
  };

  //fixes a bug when the view loaded before the data was updated
  sendState = async() => {
    const id = this.props.match.params.id;      
    await this.props.editItem(id, this.state);
    this.props.history.push(`/items/${id}`);
  };

  render() {
    return (
      <>
        {/* Can potentially be extracted into its own ErrorMessage component */}
        {this.state.isValidName ? "" : this.state.errors.name}
        <EditItemFormView
          name={this.state.name}
          price={Number(this.state.price)}
          quantity={Number(this.state.quantity)}
          category={this.state.category}  
          description={this.state.description} 
          imageURL={this.state.imageURL}        
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          view={this.props.view}
        />
      </>
    );
  }
}

const mapState = (state) => {
  return { 
    item: state.item,
    view: state.view };
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    fetchItem: (id) => dispatch(fetchItemThunk(id)),
    editItem: (id, item) => dispatch(editItemThunk(id, item)),
  };
};

EditItemFormContainer.propTypes = {
    fetchItem: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(EditItemFormContainer);
