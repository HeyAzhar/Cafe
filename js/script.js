var options = {
  animateThreshold: 160,
  scrollPollInterval: 40
}
$('.aniview').AniView(options);

function initMap() {
  var cafe = {lat: 12.9159, lng: 77.60556};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: cafe});
  var marker = new google.maps.Marker({position: cafe, map: map});
}