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



