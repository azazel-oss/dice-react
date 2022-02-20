import React, { Component } from "react";
import "./Dice.css";

class Dice extends Component {
  render() {
    let diceVal;
    switch (this.props.value) {
      case 1:
        diceVal = "one";
        break;
      case 2:
        diceVal = "two";
        break;
      case 3:
        diceVal = "three";
        break;
      case 4:
        diceVal = "four";
        break;
      case 5:
        diceVal = "five";
        break;
      default:
        diceVal = "six";
        break;
    }
    return (
      <div key={Math.random()} className="Dice">
        <i
          className={`fa-solid fa-dice-${diceVal} ${
            this.props.rolling && "shake"
          }`}
        ></i>
      </div>
    );
  }
}

export default Dice;
