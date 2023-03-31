import React, { Component } from "react";
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    }
  }

  handleChange = ({ target }) => {
    this.setState({ title: target.value });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.props.search(this.state.title);
    }
  }

  render() {
    return (
      <form>
        <input 
          type="text"
          name="title"
          placeholder="🔎"
          value={this.state.title}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default Form;