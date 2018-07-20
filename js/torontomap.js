$(document).ready(function(){
    initMap();
});


function initMap(){
	var mymap = L.map('map').setView([43.987021, -77.819589], 9);
    mymap.scrollWheelZoom.disable();
    mymap.on('focus', function() { mymap.scrollWheelZoom.enable(); });
    mymap.on('blur', function() { mymap.scrollWheelZoom.disable(); });
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWdhOTgiLCJhIjoiY2pqb2pmbXM4MHRwazN3bGU1c2RwYjEwNiJ9.AiTusF62WVe7FiBxkVq0CA'
	}).addTo(mymap);

	L.marker([44.342769, -76.047971]).addTo(mymap).bindPopup('THOUSAND ISLANDS');
    L.marker([43.656390, -79.383693]).addTo(mymap).bindPopup('RED LOBSTER');
    L.marker([43.642523, -79.387054]).addTo(mymap).bindPopup('CN TOWER');
    L.marker([43.652362, -79.383666]).addTo(mymap).bindPopup('TORONTO CITY HALL');
}
