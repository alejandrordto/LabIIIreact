import React, { Component } from 'react';
import { TodoList } from './TodoList';
import Menu from "./component/Menu";
import Card from '@material-ui/core/Card';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import MenuItem from '@material-ui/core/MenuItem';
import { TextField } from '@material-ui/core';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', priority: '', dueDate: new Date() };
    this.handletext = this.handletext.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleside = this.handleside.bind(this);
  }
  handletext(e) {
    this.setState({ text: e.target.value });
  }
  handleside(e) {
    if (this.state.side) {
      this.setState({ side: false });
    } else {
      this.setState({ side: true });
    }
    console.log(this.state.side)

  }
  handlePriorityChange(e) {
    this.setState({ priority: e.target.value });
  }
  handleDateChange(e) {
    this.setState({ dueDate: e });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    if (!this.state.text || !this.state.dueDate || !this.state.priority) {
      return;
    }
    const newItem = {
      text: this.state.text,
      priority: this.state.priority,
      dueDate: this.state.dueDate
    }
    console.log(newItem)
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '',
      priority: '',
      dueDate: ''
    }))

  }
  render() {
    const estates = [
      { status: "Completed" }, { status: "In Progess" }, { status: "Ready" }
    ]
    return (


      <div className="TodoApp">
        <div>
          <IconButton className="btn" aria-label="Menu" onClick={this.handleside}>
            <Menu></Menu>
          </IconButton>
        </div>
        <Drawer open={this.state.side}>
          <div
            role="presentation"
          ></div>
          <List>
            <ListItem key='User'>
              <ListItemIcon><Face></Face></ListItemIcon>
              <ListItemText primary={localStorage.getItem('email')} />
            </ListItem>

          </List>
          <Divider />
          <Button variant="contained" color="secondary" onClick={this.handleside}>
         LOG OUT
      </Button>
        </Drawer>
        
        <div>
          <Menu />
          <h2>hola {localStorage.getItem('email')}</h2>
            <form onSubmit={this.handleSubmit}>
              <input
                id="texto"
                type="text"
                placeholder="text"
                onChange={this.handletext}
                value={this.state.text}
              /><br />
              <br />
              <TextField
                id="priority"
                select
                label="estado"
                onChange={this.handlePriorityChange}
                value={this.state.priority}  
              >
                {estates.map(option => (
                  <MenuItem key={option.status} value={option.status}>
                    {option.status}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <br />
              <DatePicker
                id="date-todo"
                selected={this.state.dueDate}
                onChange={this.handleDateChange} />
              <br />
              <button onClick={this.handleSubmit}>
                Add
            </button>
            </form>
          
        </div>
        <h2>Lista de tareas</ h2>
        <Card> <TodoList items={this.state.items} /></Card>
       

      </div>

    );
  }
}

export default TodoApp;