window.addEventListener("keydown", checkArrowKeys, false);
var h2El = document.getElementByTagName("h2")
function checkArrowKeys(e) {
    if (e.keyCode == "37") {
        h2El.innerHTML = "Left Arrow";
    } else if (e.keyCode == "38") {
        h2El.innerHTML = "Up Arrow";
    } else if (e.keyCode == "39") {
        h2El.innerHTML = "Right Arrow";
    } else if (e.keyCode == "40") {
        h2El.innerHTML = "Down Arrow";
    }
}
