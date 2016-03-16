var View = require('./ttt-view');
var Game = require('../../ttt-core-solution/game');

$(function () {
  var $game1 = $(".ttt");
  var game = new Game();
  var view = new View(game, $game1);
});
