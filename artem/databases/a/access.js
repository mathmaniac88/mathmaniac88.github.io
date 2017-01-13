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
  var i = 0;
  var verified = false;
  while(i < users.length) {
    if(username.value === users[i].username && password.value === users[i].password) {
      localStorage.setItem("isSignedIn", true);
      localStorage.setItem("currentUser", users[i].name);
      var verified = true;
      window.location.replace("home.html");
    } else if(username.value === "" || password.value === "") {
      password.value = "";
      document.getElementById("error").innerHTML = "Please fill out all fields";
    } else {
      i++;
    }
  }
  if(!verified) {
    password.value = "";
    document.getElement("error").innerHTML = "The username and/or password is incorrect";
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
