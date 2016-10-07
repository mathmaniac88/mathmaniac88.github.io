window.addEventListener("keydown", checkArrowKeys, true);
function checkArrowKeys(e) {
    if (e.keyCode == "37") {
        document.getElementById("h2").innerHTML = "The left arrow was pressed";
    } else if (e.keyCode == "38") {
        document.getElementById("h2").innerHTML = "The up arrow was pressed";
    } else if (e.keyCode == "39") {
        document.getElementById("h2").innerHTML = "The right arrow was pressed";
    } else if (e.keyCode == "40") {
        document.getElementById("h2").innerHTML = "The down arrow was pressed";
    }
}
