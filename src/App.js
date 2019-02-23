import React, { Component } from 'react';
import Family from './components/Family';
import { MyProvider } from './context';
import './App.css';

class App extends Component {


  render() {

    return (
      <MyProvider>
        <div className="App">
          <h1>Raact Context Test</h1>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
