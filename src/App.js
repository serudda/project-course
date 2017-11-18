import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormUser from './components/FormUser/FormUser';
import Form from './components/Form/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/*<Input userId="20" max="100" />*/}
        {/*<Button />*/}
        {/*<List />*/}
        <Form />
        <br />
        <FormUser />
      </div>
    );
  }
}

export default App;
