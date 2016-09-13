
var addScore = function() {
    var score = 0;
    score += 10;
    scoreTag = document.getElementById("scoreTag");
    scoreTag.innerHTML = "Score: " + score;
}
addScore();
