import React, { Component } from 'react';
import '../css/App.css';

class OnlineStatus extends Component {
  render() {
    if(this.props.url === 'offline' ) {
        return (
          <div className="online-status-container"><div>Offline</div></div>
        );

    } else {
        return (
            <div className="online-status-container"><a href={this.props.url}>Watch Stream</a></div>        
        );
    }
  }
}

export default OnlineStatus;
