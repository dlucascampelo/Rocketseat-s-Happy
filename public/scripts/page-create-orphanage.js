//creating map
const map = L.map("mapid").setView([-8.0560888,-34.8982183], 14.5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//put icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;
//add latitude and longitude
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  marker && map.removeLayer(marker);

  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//add images
function addPhotoField() {
  const container = document.querySelector("#images");
  //duplicating images
  const fieldsContainer = document.querySelectorAll(".new-upload");

  //clone images
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  //verify if the image's container is empty
  const input = newFieldContainer.children[0];

  if (input.value === "") {
    return;
  }

  input.value = "";
  //add the images to a new field
  container.appendChild(newFieldContainer);
}
//making the "delete" button works
function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    span.parentNode.children[0].value = "";
    return;
  }

  span.parentNode.remove();
}
//making the "yes" and "no" button work

function toggleSelect(event) {
  document
    .querySelectorAll(".button-select button")
    .forEach(button => button.classList.remove("active"));

  const button = event.currentTarget;
  button.classList.add("active");

  const input = document.querySelector('[name="open_on_weekends"]');
  input.value = button.dataset.value;
}
