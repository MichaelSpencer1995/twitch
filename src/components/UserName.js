import React, { Component } from 'react';
import '../css/App.css';

class UserName extends Component {
  render() {
    return (
      <div className="username-container">{this.props.userName}</div>
    );
  }
}

export default UserName;
