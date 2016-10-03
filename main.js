var score = 0;
var storedScore = 0;
if (localStorage.getItem('score') === NaN) {
    localStorage.setItem('score', score);
}else{
    storedScore = localStorage.getItem('score');
    score = storedScore;
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
    score = score + 10;
    displayScore();
    save();
}
displayScore();
button.onclick = function() {
    updateScore();
}
function OnClickButton () {
    save();
}
function OnClickReset () {
    score = 0;
    displayScore();
}
console.log(Number("97"));
