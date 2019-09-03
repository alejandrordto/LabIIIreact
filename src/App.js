//import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  TodoApp  from './TodoApp';
import { Login } from "./component/Login";

class App extends Component {
  constructor(props) {
    super(props);
  }
  
    
  render() {


    return (
      <div className="App">

        <div>
          <Login />
          <TodoApp/>
        </div>        
      </div>

    );
  }
}

export default App;
