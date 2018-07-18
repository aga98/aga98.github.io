$(document).ready(function(){
    initMap();
});


function initMap(){
	var mymap = L.map('map').setView([45.547893, -75.333717], 10);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWdhOTgiLCJhIjoiY2pqb2pmbXM4MHRwazN3bGU1c2RwYjEwNiJ9.AiTusF62WVe7FiBxkVq0CA'
	}).addTo(mymap);

	L.marker([45.424294, -75.699177]).addTo(mymap).bindPopup('PARLIAMENT HILL');
    L.marker([45.428675, -75.692449]).addTo(mymap).bindPopup("TUCKER'S MARKETPLACE");
    L.marker([45.645761, -74.949686]).addTo(mymap).bindPopup('AUX CHANTIGNOLES');
    L.marker([45.682509, -74.943756]).addTo(mymap).bindPopup('OMEGA PARK');
}
