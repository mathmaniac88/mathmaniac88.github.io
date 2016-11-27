var isSignedIn = localStorage.getItem("isSignedIn");
var currentUser = localStorage.getItem("currentUser");
var nameEl = document.querySelector("#name").innerHTML;
if(isSignedIn === "true") {
  nameEl = currentUser;
} else {
  window.location.replace("index.html");
}
function logOut () {
  localStorage.setItem("isSignedIn","false");
  localStorage.setItem("currentUser", "none");
  window.location.replace("index.html");
}
