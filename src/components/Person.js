import React, { Component } from 'react';
import { MyConsumer } from '../context';


class Person extends Component {

  render() {
    return(
      <div className="person">
        <MyConsumer>
          {(context) => (  // child of Consumer
            <React.Fragment>
              <p>Name: {context.state.contacts}</p>
              <p>Age: {context.state.age} </p>
              <p>Cool: {context.state.cool}</p>
              <button onClick={context.growAYearOlder}>Birthdate</button>
              <br />
              <button onClick={context.changeCoolStatus}>Cool Staus</button>
            </React.Fragment>
          )}
        </MyConsumer>
      </div>
    )
  }
}

export default Person;
