import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import Streamer from './components/Streamer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      streamers: [],
      onlineStatus: [],
      icons: [],
      filter: 'all'
    }
  }

  render() {
    return (
      <div className="container">
        <Header 
          showAll={() => this.setState({
            filter: 'all'
          })}
          showOnline={() => this.setState({
            filter: 'online'
          })}        
          showOffline={() => this.setState({
            filter: 'offline'
          })}
        />
        <Streamer
          view={this.state.filter} 
          icon={this.state.icons[0]} 
          streamerStatus={"streamer-container" + this.checkOnlineStatus(0)}
          userName={this.state.streamers[0]}
          url={this.getLink(0)}
        />
        <Streamer 
          view={this.state.filter}         
          icon={this.state.icons[1]} 
          streamerStatus={"streamer-container" + this.checkOnlineStatus(1)}
          userName={this.state.streamers[1]}
          url={this.getLink(1)}          
        />
        <Streamer 
          view={this.state.filter}         
          icon={this.state.icons[2]} 
          streamerStatus={"streamer-container" + this.checkOnlineStatus(2)}
          userName={this.state.streamers[2]}
          url={this.getLink(2)}        
          />
      </div>
    );
  }
  
  componentDidMount() {
    let streamers = ["freecodecamp","pokemontcg","ESL_SC2"];

    fetchStreamData(streamers[0], this);
    
    
    function fetchStreamData(x, currentState) {
      if(streamers.length === 0) {
        return;
      }

      let key = 'drrtl64iwxyebivu4afs782bf7numf';
      let url = 'https://api.twitch.tv/kraken/streams/' + x + '?client_id=' + key;
  
      fetch(url)
      .then(response => {
        console.log(response)
        return response.json();
      })
      
      .then(parsedJSON => {
        currentState.setOnlineStatus(parsedJSON.stream, currentState);
        fetchUserData(x, currentState)
      })
      .catch(error => {
        console.log('parsing failed', error)
      });
    }

  
    function fetchUserData(streamer,  currentState) {
      let key = 'drrtl64iwxyebivu4afs782bf7numf';
      let url = 'https://api.twitch.tv/kraken/users/' + streamer + '?client_id=' + key;
      
      fetch(url)
      .then(response => {
        return response.json();
      })
      .then(parsedJSON => {
        console.log(parsedJSON.logo, parsedJSON.name)
        currentState.setUserInfo(parsedJSON.logo, parsedJSON.name);
        streamers.shift();
        console.log(streamers, fetchStreamData)
        fetchStreamData(streamers[0], currentState);
      })
      .catch(error => {
        console.log('parsing failed', error)
      });
    }

    
  }
  
  setOnlineStatus(x) {
    console.log(this.state)    
    let currentStatuses = this.state.onlineStatus;
    currentStatuses.push(x)
  
    this.setState({
      onlineStatus: currentStatuses
    });
  }

  setUserInfo(x, y) {
    let currentIcons = this.state.icons;
    let currentStreamers = this.state.streamers;
    
    console.log(this.state)
    currentIcons.push(x)
    currentStreamers.push(y)

    this.setState({
      icons: currentIcons,
      streamers: currentStreamers
    });
  }
 
  checkOnlineStatus(i) {
    if(this.state.onlineStatus[i] === null) {
      return ' offline';
      
    } else {
      return '';

    }
  }
  
  getLink(i) {
       if(this.state.onlineStatus[i] === null) {
         return 'offline';
         
      } else {
        return 'https://www.twitch.tv/' + this.state.streamers[i];

    } 
  }
  

}

export default App;
