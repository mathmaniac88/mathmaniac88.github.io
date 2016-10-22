function shortenUrl () {
	var url = input.value;
	var link = document.getElementById("link");
	localStorage.setItem("url",url);
	document.getElementById("input").innerHTML = "Go to http://mypublicwebsites.tk/url/url.html to test out your link";
}
