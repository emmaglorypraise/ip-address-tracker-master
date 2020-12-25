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

// function getIpDetails() {
//   fetch(URL)
//   .then response => response.json()
//   .then data => console.log(data)

  
  
// }

function getIpDetails () {
  fetch(URL)
  .then(response => {
    return response.json();
  }) 
  .then(displayResults);
}

function displayResults(response) {
  console.log(response);

  // let ip = document.querySelector('.ip');
  // ip.innerText = `${ip}`;

  // let location = document.querySelector('.location');
  // location.innerText = `${location.city}, ${location.postalCode}`;

  // let timezone = document.querySelector('.timezone');
  // timezone.innerText = `${location.timezone}`;

  // let isp = document.querySelector('.isp');
  // isp.innerText = `${isp}`;

}




