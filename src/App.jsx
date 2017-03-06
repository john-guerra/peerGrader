import React, { Component } from 'react';
import Projects from './Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header" role="header">
          <div className="row">
            <div className="col-md-8">
              <h1>
              Grade your peers
              </h1>
              <p>You have five points to recognize your peers for their work. Distribute them wisely</p>
            </div>
            <div className="col-md-4">
            <p>login</p>
            </div>
          </div>
        </div> {/* header */}

        <div role="main">
          <div className="row">
            <div className="col-md-8">
              <h2>Projects:</h2>
              <Projects />
              <div>Projects</div>
            </div>
            <div className="col-md-4">
              <h2>My faves:</h2>
              <div>Faves</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
