import React, { Component } from 'react';
import './friendActivity.css';

class FriendActivity extends Component {

  // Initial state
  state = {
    name: "Jeff",
    timeStamp: "2 d",
    song: "Such Great Heights",
    band: "Postman",
    album: "Rockin' Album"
  };

  constructor(props) {
    super(props);

    // Change content after 3 seconds
    setTimeout(() => {
      this.setState({
        name: "Bob",
        timeStamp: "5 d",
        song: "You Give Love A Bad Name",
        band: "Bon Jovi",
        album: "Rockin' Album XX"
      });
    }, 3000);
  }

  render() { 
    const {name, timeStamp, song, band, album} = this.state;
    return (
        <div className="friend-activity-card">
          <div className="friend-activity-leftside">
            <div className="friend-activity-header">
                <span className="friend-activity-name cut-text">{name}</span>                
            </div> 
            <div className="friend-activity-song cut-text">
              {song}
            </div>
            <div className="friend-activity-band cut-text">
              {band}
            </div>
            <div className="friend-activity-album cut-text">
              {album}
            </div>
          </div>
          
          <div className="friend-activity-rightside">
            <span className="friend-activity-timestamp">{timeStamp}</span>
          </div>
        </div>
    );
  }
}

export default FriendActivity;