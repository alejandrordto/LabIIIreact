import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import TodoApp from '../TodoApp';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import men from '../img/men.png';
export class Login extends React.Component {
    constructor(props) {

        super(props);
        this.state = { Loggin: false, email: "", password: '' };
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLoggin = this.handleLoggin.bind(this);
    }
    handleLoggin(e) {
        e.preventDefault();

        this.setState({ Loggin: true });
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('flag', false);
        console.log(this.state);
    }
    handleEmail(e) {
        this.setState({
            email: e.target.value
            
        });
        localStorage.setItem('email',e.target.value);
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    render() {
        if (this.state.Loggin) {
            return (<div>
                <TodoApp />
            </div>)
        }
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">

                    <Card className="paper">
                        <Typography variant="headline">Task-planer</Typography>
                        <CardMedia
                            component="img"
                            alt="men"
                            align="center"
                            class="responsive"
                            image={men}
                            title="men"
                        />

                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email"
                                    autoComplete="email" autoFocus
                                    onChange={this.handleEmail} />

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
                    </Card>
                </main>
            </React.Fragment>
        );
    }

}
export default Login;
