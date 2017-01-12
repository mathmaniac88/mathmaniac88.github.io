var d = new Date();
var m  = d.getMonth();
var months = ["January", "Februrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
m = months[m];
document.querySelector("h1#month").innerHTML = m;
