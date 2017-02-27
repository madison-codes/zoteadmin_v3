import React from 'react';
import { unixTimestamp } from './unixTime.js';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';

import User from './User'
import Nav from './Nav'

import userData from './mock/.mockusers';
import dynamicSort from './dynamicSort';


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

  }

  handleSeach(e){
    this.setState({ searchTerm:  e });
    console.log(e);
  }

  handleFilterClick(button){
    this.setState({ filter: button });
  }

  handleFilterOutput(){
    if(this.state.searchTerm){
      userData.users.findAll(function(user){
        return user.unsername === this.state.searchTerm;
      });
    }
    if (this.state.filter === 'sub_end'){
      userData.users.sort(dynamicSort("sub_end"));
    }
    if (this.state.filter === 'oldest'){
      userData.users.sort(dynamicSort("created"));
    }
    if (this.state.filter === 'newest'){
      userData.users.sort(dynamicSort("created").reverse());
    } else {
      console.log('end');
      return userData.users.map(user => <User
        username={user.username}
        stripe_id={user.stripe_id}
        sub_end={unixTimestamp(user.sub_end)}
        created={unixTimestamp(user.created)} />);
    }
  }

  search(user){
    return userData.users.map(user => <User
      username={user.username}
      stripe_id={user.stripe_id}
      sub_end={unixTimestamp(user.sub_end)}
      created={unixTimestamp(user.created)} />);
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.handleFilterClick('sub_end') }>Sub End</button>
          <button onClick={() => this.handleFilterClick('oldest') }>Oldest</button>
          <form>
            <input
              type='text'
              onKeyUp={(e) => this.handleSeach(e.target.value)}
              placeholder='search'>
            </input>
          </form>
        </div>
        { this.state.searchTerm }
        <div>HEY{this.state.filter}</div>
        <div>HEY{this.handleFilterOutput()}</div>
      </div>
    );
  }
}
