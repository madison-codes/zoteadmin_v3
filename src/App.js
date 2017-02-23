import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import userData from './mock/.mockusers';

console.log(userData);

class App extends Component {
  render() {
    return (
      <div>
        <div>
          { userData.users.map(user => <p>{user.sub_end}</p>) }
        </div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
