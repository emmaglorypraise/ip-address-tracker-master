const input = document.querySelector('input');
const button = document.querySelector('button');
let ipAddress = '';
const API_KEY = 'at_y3VzDxQ6Gxn0EHucOjS5wNWRcw1l1';
URL = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${ipAddress}`;


button.addEventListener('click', getIpAddress);

function getIpAddress() {
  ipAddress = input.value; 
  console.log('value:', ipAddress);
}
getIpAddress();
  
  
// }

function getIpDetails () {
  fetch(URL)
  .then(response => {
    return response.json();
  }) 
  .then(displayResults);
}
getIpDetails();

function displayResults(response) {
  console.log(response);

  let ip = document.querySelector('.ip');
  ip.innerText = `${response.ip}`;

  let location = document.querySelector('.location');
  location.innerText = `${response.location.city}, ${response.location.country} ${response.location.postalCode}`;

  let timezone = document.querySelector('.timezone');
  timezone.innerText = `${response.location.timezone}`;

  let isp = document.querySelector('.isp');
  isp.innerText = `${response.isp}`;

}

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZW1tYWdsb3J5cHJhaXNlIiwiYSI6ImNrajNrdjQ0ZjE1aG0ycmxndTY3cTUyMHcifQ.peVpyUNOpM5Ep1AdA6vvMw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZW1tYWdsb3J5cHJhaXNlIiwiYSI6ImNrajNrdjQ0ZjE1aG0ycmxndTY3cTUyMHcifQ.peVpyUNOpM5Ep1AdA6vvMw'
    }).addTo(mymap);

    // Ask for current location and navigate to that area 
  //  map.locate({setView: true, maxZoom: 16}); 

  //  add marker to map
   var marker = L.marker([51.5, -0.09]).addTo(mymap);