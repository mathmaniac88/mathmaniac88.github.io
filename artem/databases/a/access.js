var users = [
  {
    name:"Sean",
    username:"awesomeguy",
    password:"awesomevhtccode"
  },
  {
    name:"Ethan",
    username:"john4764",
    password:"ethan101"
  },
  {
    name:"Artem",
    username:"hisname100",
    password:"fartface3"
  },
  {
    name:"Taylor",
    username:"taylord",
    password:"taylor"
  }
  ]
function authenticateData () {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  for(var i=0;i < users.length;i++) {
    if(username.value === users[i].username && password.value === users[i].password) {
      localStorage.setItem("isSignedIn", true);
      localStorage.setItem("currentUser", users[i].name);
      window.location.replace("home.html");
    }
  }
  if(username.value === "" || password.value === "") {
    password.value = "";
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
