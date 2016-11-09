function shortenUrl () {
	var input = document.getElementById("input");
	var url = input.value;
	localStorage.setItem("url",url);
	document.getElementById("text_before").innerHTML = "Go to ";
	document.getElementById("link").innerHTML= "http://mypublicwebsites.tk/url/url.html";
	document.getElementById("text_after").innerHTML = " to test out your link";
}
function log () {
	var checkedValue = document.querySelector("#rememberTrue:checked").value;
	var input = document.getElementById("input");
	var url = input.value;
	var i = 0;
	if (localStorage.getItem("i") === NaN) {
		localStorage.setItem("i", i);
	} else {
		i = localStorage.getItem("i");
	}
	if(checkedValue === true) {
		localStorage.setItem("url"+ i, url);
	}
}
