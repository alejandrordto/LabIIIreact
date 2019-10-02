//import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './TodoApp';
import { Login } from "./component/Login";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { UserProfile } from "./component/UserProfile";

class App extends Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem('isLoggedIn') == undefined) {
      localStorage.setItem('isLoggedIn', false)
    }
    if (localStorage.getItem('configure') == undefined){
      localStorage.setItem('configure',false)
    }
    localStorage.setItem('email', "prueba");
    localStorage.setItem('password', "prueba");

  }
  WhatView(logged) {
    const LoginView = () => (
      <Login />
    );

    const UserView = () => (
        <UserProfile />
    );
    console.log( logged);
    console.log( logged == "false")

    if (logged=="false") {
      return (
        <div>
          <ul>
          </ul>
          <div>
            <Route exact path="/" component={LoginView} />
          </div>
        </div>
      );
    } else {
      
      if (localStorage.getItem('configure')=="true") {
        return(<Route exact path="/" component={UserView} />)
        
      }
      else {
        return (<Route exact path="/" component={TodoApp} />)
      } 
    }
  }


  render() {
    const logg = localStorage.getItem('isLoggedIn');
    return (
      <Router>
        <div className="App">

          {this.WhatView(logg)}
        </div>
      </Router>
    );
  }
}

export default App;
