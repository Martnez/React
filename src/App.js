import React, { Component } from "react";
import "./App.css";
import Person from "./Persons/Persons";
class App extends Component {
  state = {
    datatags: [
      { name: "John", num: 3 },
      { name: "Philip", num: 21 },
      { name: "Denis", num: 17 },
    ],
  };
  switchHandler = (newName) => {
    this.setState({
      datatags: [
        { name: newName, num: 3 },
        { name: "Philip", num: 21 },
        { name: "Denis", num: 17 },
      ],
    });
  };
  newChangeHandler = (event) => {
    this.setState({
      datatags: [
        { name: event.target.value, num: 3 },
        { name: "Philip", num: 21 },
        { name: "Denis", num: 17 },
      ],
    });
  };
  render() {
    return (
      <div>
        <div className="App headder">
          <h1 className="banner"> Today is all about React</h1>
          <button onClick={this.switchHandler()} className="button">
            Switch Button
          </button>
          <Person
            name={this.state.datatags[0].name}
            num={this.state.datatags[0].num}
            finya={this.switchHandler}
          />
          <Person
            name={this.state.datatags[1].name}
            finya={this.switchHandler.bind(this, "lipa rent")}
            changed={this.newChangeHandler}
            num={this.state.datatags[1].num}
          ></Person>
          <Person
            name={this.state.datatags[2].name}
            num={this.state.datatags[2].num}
          ></Person>
        </div>
      </div>
    );
  }
}

export default App;
