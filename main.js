var score = 0;
var addScore = function() {
    score += 10;
    scoreTag = document.getElementById("scoreTag");
    scoreTag.innerHTML = "Score: " + score;
}
addScore();
