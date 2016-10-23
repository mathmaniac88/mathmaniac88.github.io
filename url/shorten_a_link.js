function shortenUrl () {
	var input = document.getElementById("input");
	var url = input.value;
	localStorage.setItem("url",url);
	document.getElementById("link").innerHTML = "Go to ";
	var el = document.createElement
}
