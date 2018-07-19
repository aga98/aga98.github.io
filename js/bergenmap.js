$(document).ready(function(){
    $('.flagcont').css({
     'background':'-webkit-linear-gradient(left,#E50000,white,#04013C)', 
});
    initMap();
});


function initMap(){
	var mymap = L.map('map').setView([45.435767, 12.337017], 12);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWdhOTgiLCJhIjoiY2pqb2pmbXM4MHRwazN3bGU1c2RwYjEwNiJ9.AiTusF62WVe7FiBxkVq0CA'
	}).addTo(mymap);

    L.marker([45.485374, 12.416660]).addTo(mymap).bindPopup('BURANO');
    L.marker([45.389841, 12.351211]).addTo(mymap).bindPopup('LIDO');
    L.marker([45.438031, 12.335974]).addTo(mymap).bindPopup('PONTE DI RIALTO');
    L.marker([45.434078, 12.338436]).addTo(mymap).bindPopup('PIAZZA SAN MARCO');
    L.marker([45.436738, 12.334546]).addTo(mymap).bindPopup('BAR RISTORANTE OMNIBUS');
}
