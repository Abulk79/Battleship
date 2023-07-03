let controller = {
    guesses: 0,

    parseGuess: function(guess) {
        let alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    
        if (guess === null || guess.length !== 2) {
            alert("Oops, that isn't on the board.");
        } else {
            let row = alphabet.indexOf(guess.charAt(0));
            let column = guess.charAt(1);
    
            if (isNaN(row) || isNaN(column)) {
                alert("Oops, that isn't on the board.");
            } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
                alert("Oops, that's off the board!");
            } else {
                return row + column;
            }
        }
        return null;    
    },

    processGuess: function(guess) {
        let location = this.parseGuess(guess);
        if(location) {
            this.guesses++;
            let hit = model.fire(location);
            if (hit && model.shipSunk === model.numShips) {
                view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
            }
        }

    }
}