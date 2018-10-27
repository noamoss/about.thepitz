// this file to set the leaflat Map service


//first import the mapbox access token from the local env, saved in the config.js file
var mapbox_access_token = config.MAPBOX_ACCESS_TOKEN;


// create a map instance object
var map = L.map('map').locate({setView: true, maxZoon: 16});

// add layer to map
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: mapbox_access_token
}).addTo(map);

var popup = L.popup();                               // create a pop-up object


function onLocationFound(e) {               // when map loads, try defining user's locaition and show on map (with radius)
    var radius = e.accuracy / 2;
    L.marker(e.latlng).addTo(map)
        .bindPopup("אתם נמצאים ברדיוס של "+ radius + " מטרים מהנקודה הזו").openPopup();
    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);   // when map is loaded, run onLocationFound if te location is found

function onLocationError(e) {                                      // tell user their location was not found
    alert("האפליקציה לא הצליחה לאתר את המיקום המדוייק שלך");
}

map.on('locationerror', onLocationError);  // when map is loaded, run onLocationError if the location isn't found

var currentLocation = document.getElementById("currentLocationBtn").addEventListener("click",getLocation);

function getLocation(e) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var lng = position.coords.longitude;
          var lat = position.coords.latitude;
          var position = [lng,lat];
          return position;
        });
    } else {
      alert("האפליקציה לא הצליחה לאתר את המיקום המדוייק שלך");
    }
}

function addStory(position) {
  $("#longitude").val(position[0]);
  $("#latitude").val(position[1]);
  $("#addStory").modal("toggle");
}

map.on('click', onMapClick);                              // run onMapClick when user clicks the map

function onMapClick(e) {                           // actions to run when map is being clicked
  var lng = e.latlng["lng"];
  var lat =  e.latlng["lat"];
  var position = [lng, lat];
  addStory(position);
}
