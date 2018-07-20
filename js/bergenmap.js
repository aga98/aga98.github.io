$(document).ready(function(){
    $('.flagcont').css({
     'background':'-webkit-linear-gradient(left,#E50000,white,#04013C)', 
});
    initMap();
});


function initMap(){
	var mymap = L.map('map').setView([60.394785, 5.329667], 15);
    mymap.scrollWheelZoom.disable();
    mymap.on('focus', function() { mymap.scrollWheelZoom.enable(); });
    mymap.on('blur', function() { mymap.scrollWheelZoom.disable(); });

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWdhOTgiLCJhIjoiY2pqb2pmbXM4MHRwazN3bGU1c2RwYjEwNiJ9.AiTusF62WVe7FiBxkVq0CA'
	}).addTo(mymap);

    L.marker([60.397119, 5.323246]).addTo(mymap).bindPopup('BRYGGEN');
    L.marker([60.394826, 5.343617]).addTo(mymap).bindPopup('MOUNT FLØYEN');
    L.marker([60.394647, 5.324024]).addTo(mymap).bindPopup('FISHMARKET');

    
}
