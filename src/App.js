import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BurgerContainer from "./components/BurgerContainer";
import BurgerDisplay from "./components/BurgerDisplay";

class App extends Component {
  state = {
    burgers: [],
    filtered: [],
    currentBurger: ""
  };

  handleDelete = (burgerObj) => {
    let newArr = [...this.state.burgers].filter(burger => burger !== burgerObj)
    this.setState({
      burgers: newArr
    })
  }

  showBurger = (burgerObj) => {
    this.setState({
      currentBurger: burgerObj
    })
  }

  showFiltered = (value) => {
    if(value === "All"){
      this.setState({
        filtered: this.state.burgers
      })
    } else {
      let newArr = [...this.state.burgers].filter(burger => burger.category === value)
      this.setState({
        filtered: newArr
      })
    }

  }

  componentDidMount() {
    fetch("http://localhost:3001/burgers")
      .then(response => response.json())
      .then(burgers =>
        this.setState({
          burgers: burgers,
          filtered: burgers
        })
      );
  }

  render() {
    return (
      <div id="App">
        <BurgerContainer showFiltered={this.showFiltered} burgers={this.state.filtered} handleDelete={this.handleDelete} showBurger={this.showBurger}/>
        <BurgerDisplay currentBurger={this.state.currentBurger} />
      </div>
    );
  }
}

export default App;
