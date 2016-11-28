function sendMail() {
    var link = "mailto:artem@tessov.com"
             + "&subject=" + escape("Annoying Artem")
             + "&body=" + escape(document.getElementById('myText').value)
    ;

    for(var i = 1;i<100;i++) {
        window.location.href = link;
    }
}
