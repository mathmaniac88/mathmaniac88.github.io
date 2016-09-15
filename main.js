var score = 0;
var storedScore;
if storedScore === NaN {
    storedScore = 0;
} else {
    storedScore = localStorage.getItem('score');
}
var scoreTag = document.getElementById("scoreTag");
var button = document.getElementById("button")
var saveButton = document.getElementById("saveButton")
var displayScore = function() {
    storedScore = localStorage.getItem('score');
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
function OnClickButton () {
    save();
    console.log("It works!");
}
