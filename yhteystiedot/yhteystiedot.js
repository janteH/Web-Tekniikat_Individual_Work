function facebook() {
    window.open('https://www.facebook.com/', '_blank');
}

function instagram() {
    window.open('https://www.instagram.com/', '_blank');
}

fetch("http://api.weatherapi.com/v1/current.json?key=eee59b26e75b400882f91836221505&q=helsinki&aqi=no")
    .then(res=>res.json())
    .then(
        data => {
            document.getElementById('printApi').innerHTML = "<h2>" + data.location.name + "</h2>" + "<p>" + data.location.localtime + "</p>";
            document.getElementById('printApi').innerHTML += data.current.temp_c + " °C " + '<img src="https:' + data.current.condition.icon + '"/>';
        }
    )
