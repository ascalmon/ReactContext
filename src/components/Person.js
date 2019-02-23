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
            <button className="btn btn-dark" onClick={context.growAYearOlder}>
              <i className="fas fa-birthday-cake" >
              Birthday
            </i>
            </button>
              <br />
              <br />
              <button className="btn btn-dark" onClick={context.changeCoolStatus}>
                  <i className="fas fa-thumbs-up" >
                    Cool
                  </i>
                {}}
              </button>
            </React.Fragment>
          )}
        </MyConsumer>
      </div>
    )
  }
}

export default Person;
