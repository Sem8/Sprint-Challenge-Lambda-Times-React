import React, { Component } from 'react';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginText: ''
        };
    }

    changeHandler = (e) => {
        this.setState({ loginText: e.target.value });
    }

    submitHandler = e => {
        e.preventDefault();
        localStorage.setItem('username', this.state.loginText);
        this.setState({loginText: ''});
        window.location.reload();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                    placeholder='Type in Username'
                    value={this.state.loginText}
                    onChange={this.changeHandler}
                     />
                </form>
                <button onClick={this.submitHandler}>Log In</button>
            </div>
        )
    }
}

export default LoginPage;