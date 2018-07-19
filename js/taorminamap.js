$(document).ready(function(){
    $('.flagcont').css({
     'background':'-webkit-linear-gradient(left,#cc0000,white,#009246)', 
});
    initMap();
});


function initMap(){
	var mymap = L.map('map').setView([37.794208, 15.117288], 12);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWdhOTgiLCJhIjoiY2pqb2pmbXM4MHRwazN3bGU1c2RwYjEwNiJ9.AiTusF62WVe7FiBxkVq0CA'
	}).addTo(mymap);

	L.marker([37.824409, 15.272331]).addTo(mymap).bindPopup('GIARDINI-NAXOS');
    L.marker([37.753501, 14.997125]).addTo(mymap).bindPopup('MOUNT ETNA');
}
