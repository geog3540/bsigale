
var google;

function initMap() {
        // The location of Uluru
        const uluru = { lat: 41.881832, lng: -87.623177 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
        });
