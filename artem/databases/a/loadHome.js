var isSignedIn = localStorage.getItem("isSignedIn");
var currentUser = localStorage.getItem("currentUser");
if(isSignedIn === "true") {
  load();
} else {
  window.location.replace("index.html");
}
function logOut () {
  localStorage.setItem("isSignedIn","false");
  localStorage.setItem("currentUser", "none");
  window.location.replace("index.html");
}
function load() {
}
