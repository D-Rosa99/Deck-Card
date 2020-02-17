import React, { Component } from "react";
import "./styles/card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this._transfomX = Math.random() * 90 - 45;
    this._transfomY = Math.random() * 90 - 45;
    this._rotate = Math.random() * 90 - 45;
  }
  render() {
    const { name, image } = this.props;
    return (
      <img
        style={{
          transform: `translate(${this._transfomX}px, ${this._transfomY}px) rotate(${this._rotate}deg)`
        }}
        className="Card"
        src={image}
        alt={name}
      />
    );
  }
}

export default Card;
