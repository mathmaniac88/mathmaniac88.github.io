function shortenUrl () {
	var input = document.getElementById("input");
	var url = input.value;
	var link = document.getElementById("link");
	localStorage.setItem("url",url);
	link.innerHTML = "Go to http://mypublicwebsites.tk/url/open_a_link.html to test out your link";
}
