function authenticateData () {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
   if(username.value === "awesomeguy" && password.value === "hexaflexagon123") {
     localStorage.setItem("isSignedIn", "true");
     localStorage.setItem("currentUser", "Sean");
     window.location.replace("home.html");
   } else if(username.value === "cenaguy100" && password.value === "ethan123") {
     localStorage.setItem("isSignedIn", "true");
     localStorage.setItem("currentUser", "Ethan");
     window.location.replace("home.html");
   } else if(username.value === "da-ceo" && password.value === "anti-taylor") {
     localStorage.setItem("isSignedIn", "true");
     localStorage.setItem("currentUser", "Artem");
     window.location.replace("home.html");
   } else if(username.value === "taylord" && password.value === "taylor") {
     localStorage.setItem("isSignedIn", "true");
     localStorage.setItem("currentUser", "Dumpling");
     window.location.replace("home.html");
   } else if(username.value === "eugene668" && password.value === "D!aM0nd2") {
     localStorage.setItem("isSignedIn", "true");
     localStorage.setItem("currentUser", "Eugene");
     window.location.replace("home.html");
   } else if(username.value === "" || password.value === "") {
     document.getElementById("error").innerHTML = "Please fill out all fields";
   } else {
     password.value = "";
     document.getElementById("error").innerHTML = "The username and/or password is incorrect";
   }
}
if(localStorage.getItem("isSignedIn") === "true") {		
  window.location.replace("home.html");
}
document.onkeyup = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '13') {
      document.getElementById("signin").click();
    }
}
Contact GitHub API Training Shop Blog About
