import React, { Component } from 'react';
import '../css/App.css';

class Icon extends Component {
  render() {
    return (
      <div className="icon-container">
        <img src={this.props.imageUrl}/>
      </div>
    );
  }
}

export default Icon;
