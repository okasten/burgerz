import React, { Component } from "react";
import BurgerItem from "./BurgerItem";

class BurgerList extends Component {

  render() {
    let list = this.props.burgers.map(burger => {
      return (<BurgerItem burger={burger} id={burger.id} handleDelete={this.props.handleDelete} showBurger={this.props.showBurger}/>)
    })

    return (
      <div className="BurgerList">
        {list}
      </div>);
  }
}

export default BurgerList;
