//Create map
var map = new L.map('mapDiv', {
    //change the centering and zoom as needed
    center: [38.055,-84.483],
    zoom: 14,
    minZoom: 10,
    maxZoom: 17,
    zoomControl: true,
    dragging: true,
});

// Add tile layer
var layer = new L.StamenTileLayer("toner-lite");

map.addLayer(layer);

/*	//create some icons!
 var closedIcon = L.icon({
 iconUrl: 'square.png',
 iconSize: [36, 36],
 iconAnchor: [18, 18],
 popupAnchor: [0, -6]
 });
 var openIcon = L.icon({
 iconUrl: 'noun_64169_cc.png',
 iconSize: [36, 36],
 iconAnchor: [18, 18],
 popupAnchor: [0, -6]
 });*/

//var housingPoints = null;

// Get GeoJSON and put on it on the map when it loads
//$.getJSON("data/housing.geojson",function(data){
    // set housingPoints to the dataset, and add the bus stop GeoJSON layer to the map
    //var housingPoints = L.geoJson(data,{
        /*onEachFeature: function (feature, layer) {
         var props = layer.feature.properties;
         layer.bindPopup("<b>" + "Address: " + "</b>" +props.Address + "<br>" + "<b>" +"Date Opened: " + "</b>" + props.DateOpened + "<br>" + "<b>" + "Outcome: " + "</b>" + props.Status);
         },*/
        /*pointToLayer: function (feature, latlng) {
         if (feature.properties.Closed == "Y"){
         var marker = L.marker(latlng,{icon: closedIcon});
         } else {
         var marker = L.marker(latlng,{icon: closedIcon})
         };
         return marker;
         }*/
 //   }).addTo(map);
//});

var markers = L.markerClusterGroup();

for (var i = 0; i < addressPoints.length; i++) {
    var a = addressPoints[i];
    var title = a[2];
    var marker = L.marker(new L.LatLng(a[0], a[1]), { title: title });
    marker.bindPopup(title);
    markers.addLayer(marker);
}

map.addLayer(markers);
