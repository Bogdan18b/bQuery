const View = require("./ttt-view");
const Game = require("./game");
const $b = require("./main");

$b( () => {
  const rootEl = $b('.ttt');
  const game = new Game();
  new View(game, rootEl);
});
