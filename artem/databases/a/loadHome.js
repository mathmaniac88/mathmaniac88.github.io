var isSignedIn = localStorage.getItem("isSignedIn");
var currentUser = localStorage.getItem("currentUser");
if(isSignedIn === "true") {
  if(document.getElementById("name") === null) {
    alert("<div id=\"name\"></div> is null");
  } else {
    alert("It is not null");
  }
} else {
  window.location.replace("index.html");
}
function logOut () {
  localStorage.setItem("isSignedIn","false");
  localStorage.setItem("currentUser", "none");
  window.location.replace("index.html");
}
