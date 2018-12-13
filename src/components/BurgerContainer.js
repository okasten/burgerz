import React, { Component } from "react";
import BurgerList from "./BurgerList";
import BurgerFilter from "./BurgerFilter";

export default class BurgerContainer extends Component {
  render() {
    return (
      <div className="BurgerContainer">
        <BurgerFilter showFiltered={this.props.showFiltered}/>
        <BurgerList burgers={this.props.burgers} handleDelete={this.props.handleDelete} showBurger={this.props.showBurger}/>
      </div>
    );
  }
}
