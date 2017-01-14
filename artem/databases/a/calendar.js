var d = new Date();
var m  = d.getMonth();
var months = [["January", 31], ["Februrary", 28], ["March", 31], ["April", 30], ["May", 31], ["June", 30], ["July", 31], ["August", 31], ["September", 30], ["October", 31], ["November", 30], ["December", 31]];
if(d.getFullYear % 4 === 0) {
  months[1][1] = 29;
  if(d.getFullYear % 100 === 0) {
    months[1][1] = 28;
    if(d.getFullYear % 400 === 0) {
      months[1][1] = 29;
    }
  }
}
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
