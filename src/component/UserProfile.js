import React, { Component } from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import TextField from '@material-ui/core/TextField';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
export class UserProfile extends Component {
    constructor(props) {
        super(props);   
        this.state={name:"",email:localStorage.getItem("email"),password:"",secondPassword:""}          
        this.handleName = this.handleName.bind(this);
        this.handleEmail= this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleRepiPassword = this.handleRepiPassword.bind(this);
        this.handleLoggin = this.handleLoggin.bind(this);
    }
    handleLoggin(e){
        e.preventDefault();
        localStorage.setItem('configure',false);
        window.location.reload();
    }
    handleName(e) {
        this.setState({
            name: e.target.value
        });
    }
    handleEmail(e) {
        localStorage.setItem('email',e.target.value)
        this.setState({
            email: e.target.value
        });
    }
    handlePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    handleRepiPassword(e) {
        this.setState({
            secondPassword: e.target.value
        });
    }
    render() {
        const divStyle = {
            withd:"100px"    
        }; 
        return (
            
            <div>
                <AccountBoxIcon style={divStyle}/>
                <div>
                <TextField
            style={divStyle}
              value={this.state.name}
              id="texto"              
              type="text"
              label="Name"
              onChange={this.handleName}       
              InputLabelProps={{
                shrink: true,
              }}
            />
            <div></div>
            <TextField
            style={divStyle}
              value={this.state.email}
              id="texto"              
              type="text"
              label="Email"
              onChange={this.handleEmail}       
              InputLabelProps={{
                shrink: true,
              }}
            />
            <div></div>
            <TextField
            style={divStyle}
              value={this.state.password}
              id="texto"              
              type="password"
              label="Title"
              onChange={this.handlePassword}       
              InputLabelProps={{
                shrink: true,
              }}
            />
            <div></div>
            <TextField
            
            style={divStyle}
              value={this.state.title}
              id="texto"              
              type="text"
              label="Title"
              onChange={this.handleTitleChange}       
              InputLabelProps={{
                shrink: true,
              }}
            />

                </div>
                <ArrowBackIcon color="action" onClick={this.handleLoggin}/>
            </div>

        );
    }

}
 