function authenticateData () {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if(username === "awesomeguy" && password === "-12071242376-11212204105") {
    localStorage.setItem("isSignedIn", "true");
    localStorage.setItem("currentUser", "Sean");
    window.location.replace("home.html");
  } else if(username === "john4764" && password === "ethan101") {
    localStorage.setItem("isSignedIn", "true");
    localStorage.setItem("currentUser", "Ethan");
    window.location.replace("home.html");
  } else if(username === "hisname100" && password === "fartface3") {
    localStorage.setItem("isSignedIn", "true");
    localStorage.setItem("currentUser", "Artem");
    window.location.replace("home.html");
  } else {
    document.getElementById("error").innerHTML = "The username or the password is incorrect";
    username = "";
    password = "";
  }
}
if(localStorage.getItem("isSignedIn") === "true") {
  window.location.replace("home.html");
}
