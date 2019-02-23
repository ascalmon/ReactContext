import React, { Component } from 'react';

// First we will make a new context
const MyContext = React.createContext();

// Then create a Provider component
export class MyProvider extends Component {
  state = {
    name: 'John Doe',
    age: 39,
    cool: 'Yes'
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state, // Provider makes available the entire state
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        }),
        changeCoolStatus: () =>
        this.state.cool === 'Yes' ? this.setState({cool: 'No'}) : this.setState({cool: 'Yes'})
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }

}

export const MyConsumer = MyContext.Consumer;
