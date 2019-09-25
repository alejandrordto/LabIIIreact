import React, { Component } from 'react';
import { TodoList } from './TodoList';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Face from '@material-ui/icons/Face';
import Menu from "./component/Menu";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import MenuItem from '@material-ui/core/MenuItem';
import { TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [], text: '', priority: '', dueDate: new Date(), side: false };

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
    const toggleDrawer = (side, open) => event => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
    }
    return (


      <div className="TodoApp">

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
            <Fab color="primary" aria-label="add" >
              <AddIcon onClick={this.handleSubmit} />
            </Fab>

          </form>

        </div>
        <h2>Lista de tareas</ h2>
        <TodoList items={this.state.items} />


      </div>

    );
  }
}

export default TodoApp;