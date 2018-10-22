import React from "react";
import { Parent } from "./components";

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>React's New Context API App example</h2>
        <Parent />
      </div>
    );
  }
}

export default App;
