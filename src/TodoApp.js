import React, { Component } from 'react';
import { TodoList } from './TodoList';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Menu from "./component/Menu";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import MenuItem from '@material-ui/core/MenuItem';
import { TextField } from '@material-ui/core';
import Modal from '@material-ui/core/Modal'
import uuid from 'react-uuid';
import axios from 'axios';


class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [], text: '', priority: '', dueDate: new Date(), side: false, responsible: '', filter: false,
      open: false
    };

    this.handletext = this.handletext.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleside = this.handleside.bind(this);
    this.handleResponsible = this.handleResponsible.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleFilterb = this.handleFilterb.bind(this);
    this.setstatus = this.setstatus.bind(this);
    this.lista = [];
    this.fechaf = new Date();
    this.estado = "";
    if (JSON.parse(localStorage.getItem("list")) !== null) {
      this.state.items = JSON.parse(localStorage.getItem("list"));
      this.lista = JSON.parse(localStorage.getItem("list"));
    }
  }
  checkdata(items) {
    this.lista.push(items);
    localStorage.setItem("list", JSON.stringify(this.lista));
  }
  handleFilter(e) {
    this.setState({ filter: true })
    localStorage.setItem("filter", true)
  }
  handleFilterb(e) {
    this.setState({ filter: false })
    localStorage.setItem("filter", false)
  }
  handleOpen(e) {
    this.setState({ open: true })
  }
  handleClose(e) {
    this.setState({ open: false })
  }
  handleResponsible(e) {
    this.setState({ responsible: e.target.value });
  }
  handletext(e) {
    this.setState({ text: e.target.value });
  }
  setFecha(e) {
    localStorage.setItem('fecha', e)
  }
  setowner(e) {
    localStorage.setItem('responsible', e.target.value);
  }
  setstatus(e) {
    this.estado = e.target.value;
    localStorage.setItem('estado', e.target.value);
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
    if (!this.state.text || !this.state.dueDate || !this.state.priority || !this.state.responsible) {
      return;
    }
    const newItem = {
      id: uuid(),
      responsible: this.state.responsible,
      priority: this.state.priority,
      dueDate: this.state.dueDate, 
      text: this.state.text,
    }
    console.log(newItem);
    const host = "http://localhost:8080";
    axios.put(host+'/Task/addtask?userId='+localStorage.username,{
      id: this.state.responsible+this.state.dueDate+this.state.status+this.state.text,
      responsible: this.state.responsible,
      status: this.state.priority,
      text : this.state.text,
      date: this.state.dueDate,
  },{
      headers:{
          Authorization: 'Bearer '+localStorage.getItem("accessToken")
      }
  }).then(function (response) {
      window.alert("Task Added")
  }).catch(function (error) {
      console.log(error);
  })
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
    this.checkdata(newItem);

  }

  componentDidMount() {
    fetch('http://localhost:8080/Task/Tasks')
      .then(response => response.json())
      .then(data => {
        let tasksList = [];
        data.items.forEach(function (task) {
          tasksList.push({
            id: task.id,
            owner: task.owner,
            status: task.state,
            dueDate: task.date,
            text: task.activity,
          })

        });
        this.setState({ tasksList: tasksList });
      });
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
    const modalStyle = {
      position: 'absolute',
      width: 400,
      backgroundColor: "white",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      top: '50vh',
      left: '50vw',
      transform: 'translate(-50%, -50%)'
    };
    const clomunStyle = {
      width: '200px'
    }
    const buttonStyle = {
      marginBottom: "30px",
      Width: "50px",
    };
    return (


      <div className="TodoApp">

        <div>
          <Menu />
          <h2>hola {localStorage.getItem('email')}</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              id="texto"
              type="text"
              style={clomunStyle}
              placeholder="text"
              onChange={this.handletext}
              value={this.state.text}
            /><br />
            <br />
            <TextField
              value={this.state.title}
              id="responsible"
              type="responsible"
              label="responsible"
              style={clomunStyle}
              onChange={this.handleResponsible}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <div></div>
            <TextField
              id="priority"
              style={clomunStyle}
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
              style={clomunStyle}
              selected={this.state.dueDate}
              onChange={this.handleDateChange} />
            <br />
            <Fab color="primary" aria-label="add" onClick={this.handleSubmit}>
              <AddIcon onClick={this.handleSubmit} />
            </Fab>

          </form>

        </div>
        <h2>Lista de tareas</ h2>
        <TodoList items={this.state.items} />
        <button type="button" onClick={this.handleOpen}>
          Filtrar
      </button>
        <button type="button" onClick={this.handleFilterb}>
          Quitar Filtro
      </button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={modalStyle}>
            <h2 id="simple-modal-title">Filtro de tareas</h2>
            <p id="simple-modal-description"></p>
            <DatePicker
              id="date-filter"
              onChange={this.setFecha}
              style={clomunStyle}
            />

            <TextField
              id="priorityfilter"
              select
              style={clomunStyle}
              label="estado"
              onChange={this.setstatus}
              value={this.estado}
            >
              {estates.map(option => (
                <MenuItem key={option.status} value={option.status}>
                  {option.status}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="responsible"
              style={clomunStyle}
              label="responsible"
              onChange={this.setowner}
            >

            </TextField>
            <Button style={buttonStyle} variant="contained" color="primary" onClick={this.handleFilter}  >
              Apply
                </Button>
          </div>

        </Modal>

      </div>

    );
  }
}

export default TodoApp;