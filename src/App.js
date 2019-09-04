//import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './TodoApp';
import { Login } from "./component/Login";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }
  WhatView(logged) {
    const LoginView = () => (
      <Login />
    );

    const About = () => (
      <div>
        <TodoApp />
      </div>
    );
    if (!logged) {
      return (
        <div>
          <ul>
            <li><Link to="/">Login</Link></li>
          </ul>
          <div>
            <Route exact path="/" component={LoginView} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <ul>
            <li><Link to="/">TODO</Link></li>
          </ul>
          <div>
          <Route path="/" component={About} />
          </div>
        </div>
      );
    }
  }


  render() {
    if (localStorage.getItem('isLoggedIn') == undefined) {
      localStorage.setItem('isLoggedIn', false);
  }
  const logg = localStorage.getItem('isLoggedin');
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">TODO React App</h1>
          </header>

          <br />
          <br />
          {this.WhatView(logg)}
        </div>
      </Router>
    );
  }
}

export default App;
