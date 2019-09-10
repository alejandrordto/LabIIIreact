import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { TodoList } from './TodoList';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Face from '@material-ui/icons/Face';
import Menu from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', priority: '', dueDate: '', side: false };
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
    this.setState({ dueDate: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();

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


  }
  render() {

    const toggleDrawer = (side, open) => event => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
    }
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
          <h2>TodoList</h2>

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
      </div>

    );
  }
}

export default TodoApp;