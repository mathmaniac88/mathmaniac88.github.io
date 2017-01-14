var d = new Date();
var m  = d.getMonth();
var months = [["January", 31], ["Februrary", 28], ["March", 31], "April", "May", "June", "July", "August", "September", "October", "November", "December"];
numOfDays = months[m][1];
m = months[m][0];
document.querySelector("h1#month").innerHTML = m;
var day = 1;
var row = 1;
var cellNum = 1;
do {
  do {
    var specificDate = new Date(d.getFullYear(), d.getMonth(), day);
    var tableCells = document.querySelectorAll("td#row" + row);
    tableCells[specificDate.getDay()].innerHTML = day;
    if(day === d.getDate()) {
      tableCells[specificDate.getDay()].classList.add("currentDay");
    }
    if(day === numOfDays) {
      cellNum = 7;
      row = 6;
    }
    day++;
    cellNum++;
  } while(cellNum <= 7)
  cellNum = 1;
  row++;
} while(row <= 6)
