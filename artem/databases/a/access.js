function authenticateData () {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  if(username.value === "awesomeguy" && password.value === "awesomevhtccode") {
    localStorage.setItem("isSignedIn", "true");
    localStorage.setItem("currentUser", "Sean");
    window.location.replace("home.html");
  } else if(username.value === "john4764" && password.value === "ethan101") {
    localStorage.setItem("isSignedIn", "true");
    localStorage.setItem("currentUser", "Ethan");
    window.location.replace("home.html");
  } else if(username.value === "hisname100" && password.value === "fartface3") {
    localStorage.setItem("isSignedIn", "true");
    localStorage.setItem("currentUser", "Artem");
    window.location.replace("home.html");
  } else if(username.value === "taylord" && password.value === "taylor035") {
    localStorage.setItem("isSignedIn", "true");
    localStorage.setItem("currentUser", "Artem");
    window.location.replace("home.html");
  } else {
    document.getElementById("error").innerHTML = "The username or the password is incorrect";
    username.value = "";
    password.value = "";
  }
}
if(localStorage.getItem("isSignedIn") === "true") {
  window.location.replace("home.html");
}
