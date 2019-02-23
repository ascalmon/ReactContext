import React, { Component } from 'react';
import { MyConsumer } from '../context';


class Person extends Component {

  render() {

    return(
      <div className="person">
        <MyConsumer>
          {(context) => (
            <p>I'm inside the consumer</p>
          )}

        </MyConsumer>
      </div>
    )
  }
}

export default Person;
