import './App.css';
import easelandcanvas from './Assets/easelandcanvas.png';
import artExhibit from './Assets/ArtExhibit.jpeg'
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  
  render() {
    return (
      <div className="everything">
        <h1 className="title"> Myseum </h1>
        <img src={artExhibit} className="background" alt="Posh art exhibit"/>
        <img src={easelandcanvas} className="easel" alt="Easel and Canvas"/>
      </div>
    );
  }
}

export default App;
