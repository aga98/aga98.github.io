$(document).ready(function(){
    initMap();
});


function initMap(){
	var mymap = L.map('map').setView([47.441756, -70.552368], 8);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWdhOTgiLCJhIjoiY2pqb2pmbXM4MHRwazN3bGU1c2RwYjEwNiJ9.AiTusF62WVe7FiBxkVq0CA'
	}).addTo(mymap);

	L.marker([46.811875, -71.204989]).addTo(mymap).bindPopup('CHÂTEAU FRONTENAC');
    L.marker([47.023943, -70.928655]).addTo(mymap).bindPopup('SANCTUAIRE SAINTE-ANNE-DE-BEAUPRE');
    L.marker([46.890797, -71.147834]).addTo(mymap).bindPopup('CHUTE MONTMORENCY');
    L.marker([47.064000, -70.866259]).addTo(mymap).bindPopup('CANYON SAINTE-ANNE');
    L.marker([48.146107, -69.709662]).addTo(mymap).bindPopup('TADOUSSAC');
    L.marker([48.142064, -69.716430]).addTo(mymap).bindPopup('HOTEL TADOUSSAC');
    L.marker([46.805322, -71.221358]).addTo(mymap).bindPopup('47e PARALLÈLE');
}
