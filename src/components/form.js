import React from "react";

class Form extends React.Component {
  render(){
    return(
      <form onSubmit={this.props.weatherMethod}>
          <input type="text" name="city" placeholder="City name"/>
          <button>Get info</button>
          </form>
    );
  }
}
export default Form;
