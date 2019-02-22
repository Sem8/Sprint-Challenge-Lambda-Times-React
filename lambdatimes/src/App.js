import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
// import styled, { css } from 'styled-components';
import authenticate from './authentication/Authenticate';
import LoginPage from './authentication/LoginPage';

const Visible = authenticate(Content)(LoginPage);

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Visible />
    </div>
  );
}

export default App;
