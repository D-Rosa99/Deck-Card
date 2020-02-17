import React, { Component } from "react";
import Card from "./card";
import { getCardId, getCardInfo } from "./helper/cardData";

import "./styles/deck.css";

class Deck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: "",
      cardList: []
    };

    this.handleCLick = this.handleCLick.bind(this);
  }

  async componentDidMount() {
    const cardId = await getCardId();
    this.setState({ deck: cardId });
  }

  async handleCLick() {
    const card = await getCardInfo(this.state.deck);

    card
      ? this.setState({
          cardList: [
            ...this.state.cardList,
            {
              id: card.code,
              name: `${card.value} of ${card.suit}`,
              image: card.image
            }
          ]
        })
      : alert("There's not remain of card in desk");
  }

  render() {
    const cards = this.state.cardList.map(card => {
      return <Card key={card.id} name={card.name} image={card.image} />;
    });

    return (
      <div className="Deck">
        <h1 className="Deck-title">Deck of cards</h1>
        <p className="Deck-info">
          Hit the add card button to display a card from the deck
        </p>
        <button className="Deck-button" onClick={this.handleCLick}>
          Add Card
        </button>
        <div className="Deck-cards">{cards}</div>
      </div>
    );
  }
}

export default Deck;
