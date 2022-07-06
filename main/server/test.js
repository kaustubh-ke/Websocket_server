var websocket = new WebSocket('ws://'+location.hostname+'/');
websocket.onopen = function(evt) {
console.log('WebSocket connection opened');
websocket.send("It's open! Hooray!!!");
}

websocket.onmessage = function(evt) {
  var arr = JSON.parse(evt.data);
  var i;
  var out = "<table>";

  for(i = 0; i < arr.length; i++) {
    out += "<tr><td>" + 
    arr[i].mac_address +
    "</td><td>" +
    arr[i].start_time +
    "</td><td>" +
    arr[i].end_time +
    "</td><td>" +
    arr[i].dwell_time +
    "</td></tr>";
  }
  out += "</table>";
  document.getElementById("id01").innerHTML = out;
}