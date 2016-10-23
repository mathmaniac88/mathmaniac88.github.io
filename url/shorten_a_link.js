function shortenUrl () {
	var input = document.getElementById("input");
	var url = input.value;
	localStorage.setItem("url",url);
	document.getElementById("link").innerHTML = "Go to http://mypublicwebsites.tk/url/url.html to test out your link";
}
