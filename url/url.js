var url = localStorage.getItem("url");
if (url === "") {
  document.getElementById("text").innerHTML = "Sorry, there was no link associated with this page currently"
}
window.open(url,"_self");
