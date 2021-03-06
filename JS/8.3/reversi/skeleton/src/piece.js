/**
 * Initializes the Piece with its color.
 */
function Piece (color) {
    // this color = color
    this.color = color;
}

Piece.colorSwitch = function (color) {
    if (color === "white") {
        return "black"
    } else{ return "white" }
}
/**
 * Returns the color opposite the current piece.
 */


Piece.prototype.oppColor = function () {
    // if black return white
    // if white return black
    if (this.color === 'white') {
        return 'black'
    } else {
        return 'white'
    }
};



/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function () {

    if (this.color === 'white') {
        this.color = 'black'
    } else {
        this.color = 'white'
    }
    return this.color
    // if black color = white
    // else white color = black
};

/**
 * Returns a string representation of the string
 * based on its color.
 */
Piece.prototype.toString = function () {
    // if this color = black return "B"
    // if // // "W"
    return this.color[0].toUpperCase()
};

// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
    module.exports = Piece;
}
// DON'T TOUCH THIS CODE