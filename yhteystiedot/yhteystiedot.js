function facebook() {
    window.open('https://www.facebook.com/', '_blank');
}

function instagram() {
    window.open('https://www.instagram.com/', '_blank');
}

fetch("https://weatherdbi.herokuapp.com/data/weather/helsinki")
    .then(res=>res.json())
    .then(
        data => {
            document.getElementById('printApi').innerHTML = "<h2>" + data.region + "</h2>";
            document.getElementById('printApi').innerHTML += data.currentConditions.temp.c + " C " + '<img src="' + data.currentConditions.iconURL + '"/>';
        }
    )
