import React, { Component } from 'react';

// First we will make a new context
const MyContext = React.createContext();

// Then create a Provider component
export class MyProvider extends Component {
  state = {
    name: 'Antonio',
    age: 62,
    cool: 'Yes'
  }

  render() {
    return (
      <MyContext.Provider value="I'am the value">
        {this.props.children}
      </MyContext.Provider>
    )
  }

}

export const MyConsumer = MyContext.Consumer;
