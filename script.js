/**
 fetch('https://yesno.wtf/api/')
    .then(response => response.json())
    .then(
        data => {
            document.getElementById('print-here').innerHTML = "<h2>" + data.answer + "</h2>";
            document.getElementById('print-here').innerHTML += '<img src="' + data.image + '"/>';
        }
    );
 */

function facebook() {
    window.open('https://www.facebook.com/', '_blank');
}

function instagram() {
    window.open('https://www.instagram.com/', '_blank');
}