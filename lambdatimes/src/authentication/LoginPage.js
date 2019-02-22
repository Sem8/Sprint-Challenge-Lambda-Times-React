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
            <div className='loginDiv'>
                <form onSubmit={this.submitHandler} className='loginForm'>
                    <input
                    placeholder='Type in Username...'
                    value={this.state.loginText}
                    onChange={this.changeHandler}
                    className='loginInput'
                     />
                </form>
                <button onClick={this.submitHandler} className='loginButton'>Log In</button>
            </div>
        )
    }
}

export default LoginPage;