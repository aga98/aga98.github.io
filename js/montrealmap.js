$(document).ready(function(){
    initMap();
});


function initMap(){
    var mymap = L.map('map').setView([45.528842, -73.544749], 13);
    mymap.scrollWheelZoom.disable();
    mymap.on('focus', function() { mymap.scrollWheelZoom.enable(); });
    mymap.on('blur', function() { mymap.scrollWheelZoom.disable(); });
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWdhOTgiLCJhIjoiY2pqb2pmbXM4MHRwazN3bGU1c2RwYjEwNiJ9.AiTusF62WVe7FiBxkVq0CA'
    }).addTo(mymap);

    var notre = L.marker([45.504554, -73.555940]).addTo(mymap).bindPopup('NOTRE-DAME BASILICA'),
    mount     = L.marker([45.504004, -73.586849]).addTo(mymap).bindPopup('MOUNT ROYAL'),
    biodome   = L.marker([45.559662, -73.549880]).addTo(mymap).bindPopup('MONTREAL BIODOME'),
    bros      = L.marker([45.505935, -73.555969]).addTo(mymap).bindPopup('BROS PIZZERIA');
}
