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
    if (localStorage.getItem('isLoggedIn') == undefined) {
      localStorage.setItem('flag',true)
    }

    localStorage.setItem('isLoggedIn',false);
    localStorage.setItem('email',"prueba");
    localStorage.setItem('password',"prueba");

  }
  WhatView(logged) {
    const LoginView = () => (
      <Login />
    );

    const About = () => (
      <div>
        <TodoApp  />
      </div>
    );
    if(localStorage.getItem('flag')){
      console.log(logged)
    }
      console.log(logged,logged=false)
    
    
    if (!logged ) {
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
      return (
        <div>
          <ul>
          </ul>
          <div>
          <Route exact path="/about" component={About}/>
          </div>
        </div>
      );
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
