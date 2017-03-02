function initMap() {
  // Create center marker at UCSD
  // var ucsd_ltlng = {lat:32.880, lng:-117.236};  
  var ucsd_ltlng = {lat:32.884997, lng:-117.241284};  

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: ucsd_ltlng,
    zoom: 15
  });

  var marker = new google.maps.Marker({
      position: ucsd_ltlng,
      map: map,
      title: 'UCSD'
  });
  console.log("initMap");
}