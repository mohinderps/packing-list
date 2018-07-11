import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';

import './NewItem.css';

class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // Do something when the state of this input changes.
    const {value} = event.target;
    this.setState({
      value
    });
  };

  handleSubmit(event) {
    const { onSubmit } = this.props;
    const { value } = this.state;
    onSubmit({
      value,
      id: uniqueId(),
      packed: false
    });
    this.setState({
      value: ''
    })

    event.preventDefault();

    // Do something when a new value is submitted.

    // Reset the state of the component.
  };

  render() {
    const { value } = this.state;

    return (
      <form className="NewItem" onSubmit={this.handleSubmit}>
        <input
          className="NewItem-input"
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        <input className="NewItem-submit button" type="submit" />
      </form>
    );
  }
}

export default NewItem;
