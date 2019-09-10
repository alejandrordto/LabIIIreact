import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import TodoApp from '../TodoApp';    


export class Login extends React.Component{
    constructor(props) {

        super(props);
        this.state = { Loggin: false ,email: "", password: ''};
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this); 
        this.handleLoggin = this.handleLoggin.bind(this);
    }
    handleLoggin(e) {
        e.preventDefault();

        this.setState({ Loggin: true });
        localStorage.setItem('isLoggedIn',true);
        localStorage.setItem('flag',false);
        console.log(this.state);
    }
    handleEmail(e) {
        this.setState({
            email: e.target.value
        });      
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    render(){
        if (this.state.Loggin) {
            return (<div>
                <TodoApp  />
            </div>)
        }
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="headline">Sign in</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" 
                                autoComplete="email" autoFocus 
                                onChange={this.handleEmail}/>
                               
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    onChange={this.handlePassword}
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit"
                                onClick={this.handleLoggin}
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}
export default Login;
