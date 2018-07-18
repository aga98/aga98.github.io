$(document).ready(function(){
    $('.flagcont').css({
     'background':'-webkit-linear-gradient(left,#cc0000,white,#009246)', 
});
    initMap();
});


function initMap(){
	var mymap = L.map('map').setView([40.550768, 14.231231], 15);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWdhOTgiLCJhIjoiY2pqb2pmbXM4MHRwazN3bGU1c2RwYjEwNiJ9.AiTusF62WVe7FiBxkVq0CA'
	}).addTo(mymap);

	L.marker([40.550242, 14.257072]).addTo(mymap).bindPopup('NATURAL ARCH');
    L.marker([40.550933, 14.242684]).addTo(mymap).bindPopup('FUNICOLARE AND PIAZZETA');
}
