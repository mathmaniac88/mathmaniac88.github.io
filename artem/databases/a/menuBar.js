var isSignedIn = Boolean(localStorage.getItem("isSignedIn"));
var currentUser = localStorage.getItem("currentUser");
document.getElementById("greeting").innerHTML = "Hi " + currentUser + "!";
function logOut () {
  localStorage.setItem("isSignedIn","false");
  localStorage.setItem("currentUser", "none");
  window.location.replace("index.html");
}
