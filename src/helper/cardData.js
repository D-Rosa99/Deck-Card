const axios = require("axios");

exports.getCardId = () => {
  return axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle")
    .then(({ data }) => {
      return data.deck_id;
    });
};

exports.getCardInfo = cardId => {
  return axios
    .get(`https://deckofcardsapi.com/api/deck/${cardId}/draw/`)
    .then(({ data }) => {
      return data.cards[0];
    });
};
