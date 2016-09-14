var score = 0;
var scoreTag = document.getElementById("scoreTag");
var displayScore = function() {
    var storedScore = localStorage.getItem('score');
    scoreTag.innerHTML = "Score: " + storedScore;
}
var save = function() {
    localStorage.setItem('score', score);
    console.log("Saved");
}
var addScore = function() {
    score += 10;
    displayScore();
    save();
}

score = 20;
save();
displayScore();
