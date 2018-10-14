var initMap = () => { var uluru = {lat: 59.939095, lng: 30.315868};

var map = new google.maps.Map(document.getElementById('google-map'), {zoom: 16, center: uluru});

var marker = new google.maps.Marker({position: uluru, map: map}); };


//global.initMap = initMap;
window.initMap = initMap;