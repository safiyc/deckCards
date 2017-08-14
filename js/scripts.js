var mainCards = function (ranks, suits){
  var cards = [];
  alert("2");
  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      cards.push(rank + " of " + suit);
    });
  });
  return cards;
};

$(document).ready(function() {
  var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  var suits = ["spades", "clubs", "hearts", "diamonds"];
  var cards = mainCards(ranks, suits);
  // var cards = [];
  // suits.forEach(function(suit) {
  //   ranks.forEach(function(rank) {
  //     cards.push(rank + " of " + suit);
  //   });
  // });
  $("ul").append("<li>Joker</li>");
  cards.forEach(function(card) {
    $("ul").append("<li>" + card + "</li>");
  });
  $("ul").append("<li>Rules of Poker</li>");
});
