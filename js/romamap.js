$(document).ready(function(){
    $('.flagcont').css({
     'background':'-webkit-linear-gradient(left,#cc0000,white,#009246)', 
});
    initMap();
});


function initMap(){
	var mymap = L.map('map').setView([41.898561, 12.478745], 15);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWdhOTgiLCJhIjoiY2pqb2pmbXM4MHRwazN3bGU1c2RwYjEwNiJ9.AiTusF62WVe7FiBxkVq0CA'
	}).addTo(mymap);

    L.marker([41.898838, 12.476841]).addTo(mymap).bindPopup('PANTHEON');
    L.marker([41.899133, 12.473096]).addTo(mymap).bindPopup('PIAZZA NAVONA');
    L.marker([41.895746, 12.482579]).addTo(mymap).bindPopup('PIAZZA VENECIA');
    L.marker([41.890189, 12.492283]).addTo(mymap).bindPopup('COLOSSEO');
    L.marker([41.902208, 12.456797]).addTo(mymap).bindPopup('PIAZZA SAN PIETRO');
    L.marker([41.900913, 12.483328]).addTo(mymap).bindPopup('FONTANA DI TREVI');
    L.marker([41.901078, 12.477247]).addTo(mymap).bindPopup('GIOLITTI');
    L.marker([41.889288, 12.496641]).addTo(mymap).bindPopup('RISTORANTE COLOSSEO "LUZZI"');
}
