//creating map
const map = L.map("mapid").setView([-8.0575973, -34.8931162], 14);
//adding tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
//creating icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const addMarker = ({id,name,lat,lng}) => {
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="orphanage.html?id=${id}"<img src="/images/arrow-white.svg"> </a>`
  );
  L.marker([lat, -lng], { icon: icon })
    .addTo(map)
    .bindPopup(popup);
};
const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach( span => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng
  }
  addMarker(orphanage)
})