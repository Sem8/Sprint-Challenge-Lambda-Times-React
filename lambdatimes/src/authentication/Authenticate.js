import React, { Component } from 'react';


const authenticate = FirstClassComponent => SecondClassComponent =>
    class extends Component { 
        constructor() {
            super();
            this.state = {
                loggedIn: false
            }            
    }

    componentDidMount() {
        if(!localStorage.getItem('username')) {
            this.setState({ loggedIn: false })
        } else {
            this.setState({ loggedIn: true})
        }
    }

    render() {        
            if(this.state.loggedIn == true) {
                return <FirstClassComponent />
            } 
                return <SecondClassComponent />
        }
    }  

export default authenticate;