import React, { Component } from 'react';
import '../css/App.css';

class ViewButton extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className={this.props.className + ' change-view'}>{this.props.text}</div>
    );
  }
}

export default ViewButton;
