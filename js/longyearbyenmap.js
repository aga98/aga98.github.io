$(document).ready(function(){
    $('.flagcont').css({
     'background':'-webkit-linear-gradient(left,#E50000,white,#04013C)', 
});
    initMap();
});


function initMap(){
	var mymap = L.map('map').setView([78.219372, 15.733400], 12);
    mymap.scrollWheelZoom.disable();
    mymap.on('focus', function() { mymap.scrollWheelZoom.enable(); });
    mymap.on('blur', function() { mymap.scrollWheelZoom.disable(); });

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWdhOTgiLCJhIjoiY2pqb2pmbXM4MHRwazN3bGU1c2RwYjEwNiJ9.AiTusF62WVe7FiBxkVq0CA'
	}).addTo(mymap);

    L.marker([78.222278, 15.652902]).addTo(mymap).bindPopup('SVALBARD MUSEUM');
    L.marker([78.223857, 15.630919]).addTo(mymap).bindPopup('LONGYEARBYEN');
    L.marker([78.218423, 15.696418]).addTo(mymap).bindPopup('SVALBARD VILLMARKSSENTER');

    
}
