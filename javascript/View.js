let view = {
    displayMessage: function(msg) {
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHint: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class" , "hit");
    },
    displayMiss: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute("class" , "miss");
    }
}