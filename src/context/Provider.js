import React from "react";
import { Context } from "../context";

export class Provider extends React.Component {
  state = {
    name: "Roberto",
    age: 80
  };
  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          makeMeYounger: () =>
            this.setState({
              age: this.state.age >= 0 ? this.state.age - 1 : 0
            })
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
