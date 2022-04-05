// Creating a map object
var map = new L.map('map');
           
// Creating a Layer object
var layer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// Adding layer to the map
map.addLayer(layer);

// Creating a marker
var marker;

this.map.locate({
  setView: true,
  zoom: 20
}).on("locationfound", e => {
    if (!marker) {
        marker = new L.marker(e.latlng).addTo(this.map)
        .bindPopup('You are here')
        .openPopup();
    } else {
        marker.setLatLng(e.latlng)
        .bindPopup('You are here')
        .openPopup();;
    }
}).on("locationerror", error => {
    if (marker) {
        map.removeLayer(marker);
        marker = undefined;
    }
});