$(document).ready(function(){
    $('.flagcont').css({
     'background':'-webkit-linear-gradient(left,#E50000,white,#04013C)', 
});
    initMap();
});


function initMap(){
	var mymap = L.map('map').setView([62.077856, 7.240526], 12);
    mymap.scrollWheelZoom.disable();
    mymap.on('focus', function() { mymap.scrollWheelZoom.enable(); });
    mymap.on('blur', function() { mymap.scrollWheelZoom.disable(); });

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWdhOTgiLCJhIjoiY2pqb2pmbXM4MHRwazN3bGU1c2RwYjEwNiJ9.AiTusF62WVe7FiBxkVq0CA'
	}).addTo(mymap);

    L.marker([62.102301, 7.199237]).addTo(mymap).bindPopup('GEIRANGERFJORD');
    L.marker([62.048879, 7.270051]).addTo(mymap).bindPopup('DALSNIBBA');
    L.marker([62.030576, 7.278597]).addTo(mymap).bindPopup('DJUPVATNET LAKE');

    
}
