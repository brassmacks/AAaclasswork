// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  var Piece = require("./piece");
}
// DON'T TOUCH THIS CODE

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  // 
  // Grid new Array(8) with 8 length
  // coord = [x, y]
  // 
  // Array.new(8) {Array.new(8)}
  const grid = new Array(8); 
  for ( let i = 0; i < 8; i++ ) {
    grid[i] = new Array(8);
  }; 
  let setter = () => { 
  grid[3][4] = new Piece('black');
  grid[4][3] = new Piece('black');
  grid[3][3] = new Piece('white');
  grid[4][4] = new Piece('white');
  };
  setter();
  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {

  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  // [x, y]
  
  if (pos[0] <= 7 && pos[1] <= 7 && pos[0] >= 0 && pos[1] >= 0) {
     return true;
    }else { 
      
      return false;
     };
  // return boolean 
};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  // throw error if x or y is greater than 7
  if ( !(this.isValidPos(pos))) {
    throw new Error("Not valid pos!")
  }
  
  if (this.grid[pos[0]][pos[1]]) {
    return this.grid[pos[0]][pos[1]];
  } else {
    return undefined;

  }
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */

Board.prototype.isMine = function (pos, color) {
  if (this.isValidPos(pos) && this.getPiece(pos) != undefined) {
  return (this.getPiece(pos).color === color);
  } else {
    return false;
  }
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {

  if (this.grid[pos[0]][pos[1]]) {
    return true;
  } else {
    return false};
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */                                        // [x, y] "w""b" [+,-] [ [pos]]
Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip=[]) { 
  // start with an empty array, 
  // have a conditional to check to see start.color pos + dir = start color
  // we have to call piecestoFlip(pos + dir, color, dir, piecesToFlip.push(pos))
  debugger
  let nextPos = [(pos[0] + dir[0]), (pos[1] + dir[1])]

  if (!(this.isValidPos(nextPos))) {
    debugger
    return [] };
  let myCol = Piece.colorSwitch(color);
  let ocupado = this.isOccupied(nextPos)
  let mio = this.isMine(nextPos, myCol);

  
  // I added the function colorSwitch to the piece definition
  // it just allows us to return the opposite of what ever color we pass

  debugger
  if (ocupado && mio) {
    piecesToFlip.push(pos)
    return piecesToFlip;
  } else if (ocupado && !mio) {
debugger
    piecesToFlip.push(pos)
    this._positionsToFlip(nextPos, color, dir, piecesToFlip)
  }
  return [];
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
    //this.DIRS forEach(dir) => 

};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};


// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  module.exports = Board;
}
// DON'T TOUCH THIS CODE