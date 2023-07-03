function init() {
    let fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;

    model.generateShipLocations();
}


function handleFireButton() {
    let guessInput = document.getElementById("guessInput");
    let guess = guessInput.value;
    controller.processGuess(guess);

    guessInput.value = "";

}


window.onload = init;


