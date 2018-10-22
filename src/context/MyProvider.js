import React from "react";
import { MyContext } from "../context";

export class MyProvider extends React.Component {
  state = {
    name: "Roberto",
    age: 80
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          makeMeYounger: () =>
            this.setState({
              age: this.state.age >= 0 ? this.state.age - 1 : 0
            })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
