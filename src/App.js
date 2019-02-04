import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js'
import Panel from './Panel.js'
import ListName from './ListName.js'

class App extends Component {
  render() {
    return (
      <div>

        <Navbar title="React practice" />

        <div className="container">
          <div className="row">

            <div className="col-md-6">

              <Panel title="Panel1">
                <ListName />
              </Panel>

            </div>

            <div className="col-md-6">

              <Panel title="Panel2">
                <ListName />
              </Panel>

            </div>

          </div> 
        </div> 
      </div> 
    );
  }
}

export default App;
