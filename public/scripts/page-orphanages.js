//creating map
const map = L.map('mapid').setView([-8.0575973,-34.8931162], 14);
//adding tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
//creating icon
const icon =L.icon({
iconUrl: "./public/images/map-marker.svg",
iconSize:[58,68],
iconAnchor:[29,68],
popupAnchor:[170,2]
});
const popup = L.popup({
  closeButton:false,
  className:'map-popup',
  minWidth:240,
  minHeight:240,
}).setContent('Lar Bem <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>');
L.marker([-8.0440316,-34.9295176],{icon:icon}).addTo(map)
    .bindPopup(popup)
