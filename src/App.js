import React, { Component } from 'react';
import Family from './components/Family';
import { MyProvider } from './context';
import './App.css';

class App extends Component {
  state = {
    name: 'Antonio',
    age: 62,
    cool: 'yes'
  }

  render() {
    const { name, age, cool } = this.state;
    return (
      <MyProvider>
        <div className="App">
          <h1>I'am the app</h1>
          <Family name={name} age={age} cool={cool} />
        </div>
      </MyProvider>
    );
  }
}

export default App;
