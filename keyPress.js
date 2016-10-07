window.addEventListener("keydown", checkArrowKeys, true);
function checkArrowKeys(e) {
    if (e.keyCode == "37") {
        alert("The left arrow was pressed");
    } else if (e.keyCode == "38") {
        alert("The up arrow was pressed");
    } else if (e.keyCode == "39") {
        alert("The right arrow was pressed");
    } else if (e.keyCode == "40") {
        alert("The down arrow was pressed");
    }
}
