var View = function (game, $el) {
  this.game = game;
  this.$el = $el;
  this.setupBoard();
  this.bindEvents();
};

View.prototype.bindEvents = function () {
  this.$el.on("click", "li", function(e) {
    var $li = $(e.currentTarget);
    this.makeMove($li);
  }.bind(this));
};

View.prototype.makeMove = function ($square) {
  var id = $square.attr("id");
  var pos = [id % 3, Math.floor(id/3)];
  if(!this.game.board.isEmptyPos(pos)){
    alert("Not a valid move!");
  } else {
    var winner = this.game.currentPlayer;
    $square.toggleClass(this.game.currentPlayer);
    this.game.playMove(pos);
    if(this.game.isOver() && this.game.winner()){
      alert(winner + " has won!");
    } else if (this.game.isOver()) {
      alert("No moves left. It's a tie.");
    }
  }
};

View.prototype.setupBoard = function () {
  var $figure = this.$el;
  var html = "<ul class=\"grid group\">";
  for (var i = 0; i < 9; i++) {
    html += "<li id=\"" + i + "\"></li>";
  }
  html += "</ul>";
  $figure.append(html);
};

module.exports = View;
