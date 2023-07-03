let model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipSunk: 0,

    ships: [{locations: [0, 0, 0], hits: ["", "", ""]},
            {locations: [0, 0, 0], hits: ["", "", ""]},
            {locations: [0, 0, 0], hits: ["", "", ""]}],

    fire: function(guess) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess);
            if(index >= 0 ) {
                ship.hits[index] = "hit";
                view.displayHint(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },
    
    isSunk: function(ship) {
        for(let i = 0; i < this.shipLength; i++) {
            if(ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    },

    generateShipLocations: function() {
        let locations;
        for(let i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
    },

    generateShip: function() {
        let direction = Math.floor(Math.random() * 2);
        let row, col;

        if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        } else {
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            col = Math.floor(Math.random() * this.boardSize);
            }

            let newShipLocations = [];
            for (let i = 0; i < this.shipLength; i++) {
                if (direction === 1) {
                    newShipLocations.push(row + "" + (col + i));
                } else {
                    newShipLocations.push((row + i) + "" + col);
                }
            }
            return newShipLocations;

    },

    collision: function(locations) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = model.ships[i];
            for (let j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }
}
