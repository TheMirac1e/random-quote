import { Component } from "react";
import Card from "../card/card";

import './App.scss';

class App extends Component {
  render() {
    return (
        <div className="container">
          <Card/>
        </div>
    );
  }
}

export default App;
