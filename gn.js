var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;
document.getElementById("guess button").addEventListener("click", function() {
    var guess = parseInt(document.getElementById("Guess input").value);
    attempts++;
    if (guess === randomNumber) {
        displayMessage("congratulations! You guess the number in" + attempts);
        document.getElementById("guess button").disabled = true;

    } else if (guess > randomNumber) {
        displayMessage("too high try a lower number");
    } else {
        displayMessage("too low try a higher number");
    }
});

function displayMessage(k) {
    document.getElementById("message").textContent = k;
}