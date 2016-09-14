var score;
var scoreTag = document.getElementById("scoreTag");
var button = document.getElementById("button")
var displayScore = function() {
    var storedScore = localStorage.getItem('score');
    scoreTag.innerHTML = "Score: " + storedScore;
}
var save = function() {
    localStorage.setItem('score', score);
    console.log("Saved");
}
var updateScore = function() {
    score += 10;
    displayScore();
    save();
}
displayScore();
button.onclick = function() {
    updateScore();
}
