// this file to set the leaflat Map service


//first import the mapbox access token from the local env, saved in the config.js file
var mapbox_access_token = config.MAPBOX_ACCESS_TOKEN;


// create a map instance
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// add layer to map
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: mapbox_access_token
}).addTo(mymap);


var marker = L.marker([51.5, -0.09]).addTo(mymap);
marker.bindPopup("<b>הי חביבי!</b><br>אני פופ-אפ.").openPopup();



var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);



function onMapClick(e) {
    alert("לחצת על המפה ב: " + e.latlng);
}

var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("לחצת על המפה ב:" + e.latlng.toString())
    .openOn(mymap);
}

mymap.on('click', onMapClick);
