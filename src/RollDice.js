import React, { Component } from "react";
import "./RollDice.css";
import Dice from "./Dice";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRolling: false,
      die1: Math.floor(Math.random() * 6) + 1,
      die2: Math.floor(Math.random() * 6) + 1,
    };
  }
  handleDiceRoll() {
    this.setState({
      die1: Math.floor(Math.random() * 6) + 1,
      die2: Math.floor(Math.random() * 6) + 1,
      isRolling: true,
    });
    setTimeout(() => {
      this.setState({
        isRolling: false,
      });
    }, 1000);
  }
  render() {
    this.handleDiceRoll = this.handleDiceRoll.bind(this);
    return (
      <div>
        <div className="Dices">
          <Dice value={this.state.die1} rolling={this.state.isRolling} />
          <Dice value={this.state.die2} rolling={this.state.isRolling} />
        </div>
        <button
          onClick={this.handleDiceRoll}
          className="btn"
          disabled={this.state.isRolling}
        >
          {this.state.isRolling ? "Rolling..." : "Roll Dice"}
        </button>
      </div>
    );
  }
}

export default RollDice;
