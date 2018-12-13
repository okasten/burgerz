import React, { Component } from 'react';

class BurgerDisplay extends Component{
  showCategory = () => {
    if(this.props.currentBurger.category === "Relatable"){
      return "Relatable"
    } else {
      return "Bougie"
    }
  }
  render() {
    let value = this.showCategory()
    return (
      <div className="BurgerDisplay">
        <img src={this.props.currentBurger.imgURL}/>
        <br/>
        <h1>{this.props.currentBurger.name}</h1>
        <br/>
        <select onChange={this.showCategory} value={value}>
          <option value="Relatable">Relatable</option>
          <option value="Bougie">Bougie</option>
        </select>
      </div>
    )
  }

}

export default BurgerDisplay
