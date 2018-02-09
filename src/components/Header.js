import React, { Component } from 'react';
import '../css/App.css';
import ViewButton from './ViewButton';


class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <h1>Twitch Streamers</h1>
        <div className="buttons-container">
          <ViewButton onClick={() => this.props.showAll()} text={'All'} className="show-all"/>
          <ViewButton onClick={() => this.props.showOnline()} text={'Online'} className="show-online"/>
          <ViewButton onClick={() => this.props.showOffline()} text={'Offline'} className="show-offline"/>
        </div>
      </div>
    );
  }
}

export default Header;
