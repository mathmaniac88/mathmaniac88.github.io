var link = localStorage.getItem("url");

if (link === "") {
  document.getElementById("text").innerHTML = "Sorry, there was no link associated with this page currently"
}
window.open(link,"_self");
