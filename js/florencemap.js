$(document).ready(function(){
    $('.flagcont').css({
     'background':'-webkit-linear-gradient(left,#cc0000,white,#009246)', 
});
    initMap();
});


function initMap(){
	var mymap = L.map('map').setView([43.772077, 11.256091], 15);
    mymap.scrollWheelZoom.disable();
    mymap.on('focus', function() { mymap.scrollWheelZoom.enable(); });
    mymap.on('blur', function() { mymap.scrollWheelZoom.disable(); });
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWdhOTgiLCJhIjoiY2pqb2pmbXM4MHRwazN3bGU1c2RwYjEwNiJ9.AiTusF62WVe7FiBxkVq0CA'
	}).addTo(mymap);

    L.marker([43.773090, 11.255903]).addTo(mymap).bindPopup('CATEDRALE DI SANTA MARIA DEL FIORE');
    L.marker([43.769682, 11.255642]).addTo(mymap).bindPopup('PIAZZA DELLA SIGNORIA');
    L.marker([43.765240, 11.249986]).addTo(mymap).bindPopup('PALAZZO PITTI');
    L.marker([43.767925, 11.253122]).addTo(mymap).bindPopup('PONTE VECCHIO');
    L.marker([43.766907, 11.251751]).addTo(mymap).bindPopup('GELATERIA IL BIRROCCHIO');
}
