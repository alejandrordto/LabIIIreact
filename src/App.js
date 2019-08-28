//import React from 'react';
import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import { TodoList } from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', priority: '', dueDate: '' };
    this.handletext = this.handletext.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handletext(e) {
    this.setState({ text: e.target.value });
  }
  handlePriorityChange(e) {
    this.setState({ priority: e.target.value });
  }
  handleDateChange(e) {
    this.setState({ dueDate: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    if (!this.state.text || !this.state.dueDate || !this.state.priority) {
      return;
    }
    const newItem = {
      text: this.state.text,
      priority: this.state.priority,
      dueDate: this.state.dueDate
    }
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '',
      priority: '',
      dueDate: ''
    }))
    
    console.log(this.state);
  }
  render() {
    const ListItems = [{ text: "Learn React", priority: 5, dueDate: new Date() },
    { text: "Learn about APIs", priority: 4, dueDate: new Date(2018, 8, 30) },
    { text: "write TODO App", priority: 3, dueDate: new Date(2018, 9, 30) }];


    return (
      <div className="App">

        <div>
          <h2>TodoList</h2>
          
          <form onSubmit={this.handleSubmit}>
            <input
              id="texto"
              type="text"
              placeholder="text"
              onChange={this.handletext}
              value={this.state.text}
            /><br />
            <br />
            <input
              id="priority"
              type="number"
              placeholder="Priority"
              onChange={this.handlePriorityChange}
              value={this.state.priority}
            /><br />
            <br />
            <input
              id="date"
              type="date"
              placeholder="Date(dd/mm/aa)"
              onChange={this.handleDateChange}
              value={this.state.dueDate}
            /><br />
            <br />
            <button onClick={this.handleSubmit}>
              Add
            </button>
          </form>
        </div>
        <TodoList items={this.state.items} />
        <img src={logo} className="App-logo" alt="logo" />
        
      </div>

    );
  }
}

export default App;
