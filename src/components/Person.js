import React from "react";
import { MyContext } from "../context";

export class Person extends React.Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <p>
                My name is {context.state.name} and my age is{" "}
                {context.state.age} <button onClick={context.makeMeYounger}>Please, make me younger!</button>
              </p>

            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}
