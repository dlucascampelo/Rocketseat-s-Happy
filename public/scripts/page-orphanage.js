const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}
//creating map
const map = L.map('mapid', options).setView([-8.0440316,-34.9295176], 15);
//adding tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
//creating icon
const icon =L.icon({
iconUrl: "/images/map-marker.svg",
iconSize:[58,68],
iconAnchor:[29,68],
popupAnchor:[170,2]
});

L.marker([-8.0440316,-34.9295176],{icon:icon}).addTo(map)
/*Image galery */
function selectImage(event) {
  const button = event.currentTarget

  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(button => {
    button.classList.remove('active')
  })

 //select clicked images
 const image = button.children[0]
 const imageContainer = document.querySelector(".orphanage-details > img") 
 //att img container
 imageContainer.src = image.src
 //add class .active for this button
 button.classList.add('active')
}
