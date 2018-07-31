const View = require("./ttt-view");
const Game = require("./game");
const $b = require("./main");

$( () => {
  const rootEl = $('.ttt');
  const game = new Game();
  new View(game, rootEl);
});
