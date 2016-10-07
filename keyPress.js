window.addEventListener("keydown", checkArrowKeys, true);
var htwoEl = document.getElementById("h2");
function checkArrowKeys(e) {
    if (e.keyCode == "37") {
        htwoEl.innerHTML = "Left Arrow";
    } else if (e.keyCode == "38") {
        htwoEl.innerHTML = "Up Arrow";
    } else if (e.keyCode == "39") {
        htwoEl.innerHTML = "Right Arrow";
    } else if (e.keyCode == "40") {
        htwoEl.innerHTML = "Down Arrow";
    }
}
