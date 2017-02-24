import React from 'react';
import { unixTimestamp } from './unixTime.js';
import logo from './logo.svg';
import './App.css';

import User from './User'
import Nav from './Nav'

import userData from './mock/.mockusers';
import sortUser from './sortUser';


function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    };
}

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      route: 0,
      searchTerm: '',
      filter: '',
    };
  }
  componentWillUpdate(){
    // for (var i = 0; i < userData.users.length - 1; i ++) {
    //   this.state.filtered.push(unixTimestamp(userData.users[i].sub_end) - unixTimestamp(userData.users[i+1].id));
    // }
  }

  handleFilterClick(button){
    this.setState({ filter: button });
  }

  handleFilterOutput(){
    if (this.state.filter === 'sub_end'){
      userData.users.sort(dynamicSort("sub_end"));
    }
    if (this.state.filter === 'oldest'){
      userData.users.sort(dynamicSort("created"));
    }
    if (this.state.filter === 'newest'){
      userData.users.sort(dynamicSort("created").reverse());
    } else {
      return userData.users.map(user => <User
        username={user.username}
        stripe_id={user.stripe_id}
        sub_end={unixTimestamp(user.sub_end)}
        created={unixTimestamp(user.created)} />);
    }
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.handleFilterClick('sub_end') }>Sub End</button>
          <button onClick={() => this.handleFilterClick('oldest') }>Oldest</button>
          <button onClick={() => this.handleFilterClick('newest') }>New</button>
        </div>
        <div>HEY{this.state.filter}</div>
        <div>HEY{this.handleFilterOutput()}</div>
      </div>
    );
  }
}
