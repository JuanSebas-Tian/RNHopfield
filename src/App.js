import React, { Component } from 'react';
import logo from './logo.svg';
import mario from './mario.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row header"><h1>Hopfield</h1></div>
        <div className="row icon-header">
          <div className="col-8 cubo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-8 cubo">
            <img src={mario} className="App-logo" alt="logo" />
          </div>
        </div>
        <div className="row App-header">
          <div className="col-8 cubo-preg">
          </div>
          <div className="col-8 cubo-resp">
          </div>
        </div>
        <footer id="footer">
          <div className="piso"><h1>Copy Right</h1></div>
        </footer>
      </div>
    );
  }
}

export default App;
