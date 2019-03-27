import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FriendActivity from './js/Spotify/FriendActivity/friendActivity';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FriendActivity />
        </header>
      </div>
    );
  }
}

export default App;
