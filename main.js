var score = 0;
if (localStorage.getItem('score') === NaN) {
    localStorage.setItem('score', score);
}else{
score = Number(localStorage.getItem('score'));
}
var scoreTag = document.getElementById("scoreTag");
var button = document.getElementById("button")
var saveButton = document.getElementById("saveButton")
var displayScore = function() {
    scoreTag.innerHTML = "Score: " + score;
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
