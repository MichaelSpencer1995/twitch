import React, { Component } from 'react';
import '../css/App.css';
import Icon from './Icon';
import UserName from './UserName';
import OnlineStatus from './OnlineStatus';

class Streamer extends Component {
  render() {
    if(this.props.view === 'all') {
    return (
        <div className={this.props.streamerStatus}>
          <Icon imageUrl={this.props.icon}/>
          <UserName userName={this.props.userName}/>
          <OnlineStatus url={this.props.url} userName={this.props.onlineStatus}/>        
        </div>
      );

    } else if (this.props.view === 'online') {
      if(this.props.streamerStatus.indexOf('offline') >= 0) {
        return (
          <div></div>
        );

      } else {
        return (
          <div className={this.props.streamerStatus}>
            <Icon imageUrl={this.props.icon}/>
            <UserName userName={this.props.userName}/>
            <OnlineStatus url={this.props.url} userName={this.props.onlineStatus}/>        
          </div>
        );
      }
    
    } else if (this.props.view === 'offline') {
      if(this.props.streamerStatus.indexOf('offline') === -1) { 
        return (
          <div></div>
        );

      } else {
        return (
          <div className={this.props.streamerStatus}>
            <Icon imageUrl={this.props.icon}/>
            <UserName userName={this.props.userName}/>
            <OnlineStatus url={this.props.url} userName={this.props.onlineStatus}/>        
          </div>
        );
      }
    }
  }
}

export default Streamer;
