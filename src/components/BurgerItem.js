import React, { Component } from "react";

class BurgerItem extends Component{


  render(){
    return (
      <div>
        <div className="BurgerItem">
          <h4>{this.props.burger.name}</h4>
        </div>
        <div className="BurgerBottomBun">
          <button onClick={(e) => this.props.showBurger(this.props.burger)}>Show</button>
          <button onClick={(e) => this.props.handleDelete(this.props.burger)}>Delete</button>
        </div>
      </div>
    );
  }

};

export default BurgerItem;
