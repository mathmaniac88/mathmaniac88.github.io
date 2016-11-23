var isSignedIn = localStorage.getItem("isSignedIn");
var currentUser = localStorage.getItem("currentUser");
if(isSignedIn === "true") {
  if (currentUser === "Sean") {
    var greeting = document.getElementById("greeting");
    console.log(greeting);
    greeting.innerHTML = "Hi ";
  }
} else {
  window.location.replace("index.html");
}
