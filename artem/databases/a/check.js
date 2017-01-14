var isSignedIn = localStorage.getItem("isSignedIn");
if(isSignedIn !== "true") {
  window.location.replace("index.html");
}
