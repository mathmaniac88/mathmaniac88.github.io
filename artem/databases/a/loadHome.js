var isSignedIn = localStorage.getItem("isSignedIn");
var currentUser = localStorage.getItem("currentUser");
if(isSignedIn === "true") {
  if (currentUser === "Sean") {
    var greeting = document.getElementById("greeting");
    greeting.innerHTML = "Hi " + currentUser;
  }
} else {
  window.location.replace("index.html");
}
