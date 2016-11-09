function shortenUrl () {
	var input = document.getElementById("input");
	var url = input.value;
	localStorage.setItem("url",url);
	document.getElementById("text_before").innerHTML = "Go to ";
	document.getElementById("link").innerHTML= "http://mypublicwebsites.tk/url/url.html";
	document.getElementById("text_after").innerHTML = " to test out your link";
}
function log () {
	
}
