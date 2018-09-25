var Player = function(name){
  this.name = name;
  this.ships = ["Carrier", "Battleship", "Cruiser", "Submarine", "Destroyer"];
  this.board = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]
}

var Ship = function(name, length){
  this.name = name;
  this.hp = length;
  this.position = '';
  this.coord = [];
  this.orientation = 'horizontal'
}


//convert position string to index corresponding to board matrix
Ship.prototype.positionIndex = function(){
  var alpha =[];
  for (var i = 65; i <= 80; i++) {
    alpha.push(String.fromCharCode(i));
  }
  var index1 = alpha.indexOf(this.position[0]);
  var index2 = this.position[1]-1;
  this.coord = [index1, index2];
};

//create new instances for players and ships

var car1 = new Ship('Carrier', 5);
var bat1 = new Ship('Battleship', 4);
var cru1 = new Ship('Cruiser', 3);
var sub1 = new Ship('Submarine', 2);
var des1 = new Ship('Destroyer', 1);
var car2 = new Ship('Carrier', 5);
var bat2 = new Ship('Battleship', 4);
var cru2 = new Ship('Cruiser', 3);
var sub2 = new Ship('Submarine', 2);
var des2 = new Ship('Destroyer', 1);

//adjust properties for testing
car1.position = 'A5';
car1.orientation = 'horizontal';
bat1.position = 'G5';
bat1.orientation = 'vertical';
cru1.position = 'G1';
cru1.orientation = 'vertical';
sub1.position = 'G4';
sub1.orientation = 'vertical';
des1.position = 'C2';
des1.orientation = 'horizontal';
car2.position = 'A5';
car2.orientation = 'horizontal';
bat2.position = 'G5';
bat2.orientation = 'vertical';
cru2.position = 'G1';
cru2.orientation = 'vertical';
sub2.position = 'G4';
sub2.orientation = 'vertical';
des2.position = 'C2';
des2.orientation = 'horizontal';

//initialize position to board indices
car.positionIndex();
bat.positionIndex();
cru.positionIndex();
sub.positionIndex();
des.positionIndex();

// console.log(car.coord, bat.coord, cru.coord, sub.coord, des.coord);

var player1 = new Player('Player 1');
var player2 = new Player('Player 2');

//display ship position in the matrix
Ship.prototype.displayPos = function(){
  if (this.orientation === 'horizontal'){
    var validHPos = true;
    for (var i = 0; i < this.hp; i++) {
      if (player1.board[this.coord[0]][this.coord[1]+i] === undefined || player1.board[this.coord[0]][this.coord[1]+i] !== 0){
        // console.log(player1.board[this.coord[0]][this.coord[1]+i]);
        validHPos = false;
        // console.log(validPos);
      }
    }
    if (validHPos){
      for (var j = 0; j < this.hp; j++) {
        player1.board[this.coord[0]][this.coord[1]+j] = 1;
      }
    }
  }
  else if (this.orientation === 'vertical'){
   var validVPos = true;
    for (var i = 0; i < this.hp; i++) {
      if (player1.board[this.coord[0]+i] === undefined || player1.board[this.coord[0]+i][this.coord[1]] !== 0){
        // console.log(player1.board[this.coord[0]][this.coord[1]+i]);
        validVPos = false;
        // console.log(validPos);
      }
    }
    if (validVPos){
      for (var j = 0; j < this.hp; j++) {
        player1.board[this.coord[0]+j][this.coord[1]] = 1;
      }
    }
  }
};

car1.displayPos();
bat1.displayPos();
cru1.displayPos();
sub1.displayPos();
des1.displayPos();
console.log(player1.board);
console.log(player2.board);