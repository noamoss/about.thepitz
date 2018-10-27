// this file to set the leaflat Map service


//first import the mapbox access token from the local env, saved in the config.js file
var mapbox_access_token = config.MAPBOX_ACCESS_TOKEN;


// create a map instance
var map = L.map('map').locate({setView: true, maxZoon: 16});

// add layer to map
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: mapbox_access_token
}).addTo(map);


function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("אתם נמצאים ברדיוס של "+ radius + " מטרים מהנקודה הזו").openPopup();
    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert("האפליקציה לא הצליחה לאתר את המיקום המדוייק שלך");
}

map.on('locationerror', onLocationError);


function onMapClick(e) {
    alert("לחצת על המפה ב: " + e.latlng);
}

var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("לחצת על המפה ב:" + e.latlng.toString())
    .openOn(map);
}

map.on('click', onMapClick);
