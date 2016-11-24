var isSignedIn = localStorage.getItem("isSignedIn");
var currentUser = localStorage.getItem("currentUser");
console.log(currentUser);
if(isSignedIn === "true") {
  if (currentUser === "Sean") {
    document.body.onload = document.getElementById("greeting").innerHTML = "Hi" + currentUser;
  }
} else {
  window.location.replace("index.html");
}
function logOut () {
  localStorage.setItem("isSignedIn","false");
  localStorage.setItem("currentUser", "none");
  window.location.replace("index.html");
}
