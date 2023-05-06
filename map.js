var latLong = "";
var lat = "";
var long = "";
const map = document.getElementById("map");
var ip_Address = "";

$.getJSON(`https://api.ipify.org/?format=json`, function (data) {
  ip_Address = data.ip;
});


setTimeout(() => {
$.getJSON(`https://ipinfo.io/${ip_Address}/json?token=2c4b0db5cd6210`, function (data) {
  latLong = data.loc;
  var latLongSplit = latLong.split(",");
  lat = latLongSplit[0];
  long = latLongSplit[1];
  console.log("latitude hai", lat);
  console.log("longitude hai", long);
  displayMap(lat, long)

});
// let link = `https://maps.google.com/maps?q=${lat},${long} &output=embed`;
// const iframe = document.createElement("iframe");
// iframe.src = link;


// map.appendChild(iframe);

}, 1000);

function displayMap(latitude, longitude) {
  let html = `
  <iframe 
  src="https://maps.google.com/maps?q=${latitude}, ${longitude}&output=embed" 
  width="100%" 
  height="100%" 
  frameborder="0" 
  style="border:0">
  </iframe>
  `
  map.innerHTML = html;
}