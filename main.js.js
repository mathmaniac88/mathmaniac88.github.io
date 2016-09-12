var score = 0;
var addScore = function() {
    score += 10;
    $("h2").text("Score: " + score);
}