import React, { Component } from 'react';
import Main from './components/Main/Main';
import Title from './components/Title/Title';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Title/>
        <Main/>
      </div>
    );
  }
}

export default App;
