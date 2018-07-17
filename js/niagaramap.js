$(document).ready(function(){
    initMap();
});


function initMap(){
	var mymap = L.map('map').setView([43.175690, -79.057879], 11);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWdhOTgiLCJhIjoiY2pqb2pmbXM4MHRwazN3bGU1c2RwYjEwNiJ9.AiTusF62WVe7FiBxkVq0CA'
	}).addTo(mymap);

	L.marker([43.083711, -79.074088]).addTo(mymap).bindPopup('NIAGARA FALLS');
    L.marker([43.257624, -79.068480]).addTo(mymap).bindPopup('NIAGARA ON THE LAKE');
    L.marker([43.084965, -79.079559]).addTo(mymap).bindPopup('SKYLON TOWER');
}
