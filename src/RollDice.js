import React, { Component } from "react";
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
    });
  }
  render() {
    this.handleDiceRoll = this.handleDiceRoll.bind(this);
    return (
      <div>
        <Dice value={this.state.die1} />
        <Dice value={this.state.die2} />
        <button onClick={this.handleDiceRoll}>Roll Dice</button>
      </div>
    );
  }
}

export default RollDice;
