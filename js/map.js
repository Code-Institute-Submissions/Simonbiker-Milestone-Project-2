function initAutocomplete() {

    var activeMarkers = [];
    var map;

    var locationTypes1 = [{
      name: "Restaurants",
      locations: [{
          name: `<h5>Gourmet Food Parlour</h5>` + `<h6><a href="http://gourmetfoodparlour.com//" target="_blank">Bookings</a></h6>`,
          position: { lat: 53.294992, lng: -6.135755 }
        }, // Gourmet Food Parlour Dun Laoghaire
        {
          name: `<h5>Daniel's</h5>` + `<h6><a>Booking 01 284 1027</a></h6>`,
          position: { lat: 53.286649, lng: -6.121777 }
        }, // Daniel's 
        {
          name: `<h5>Nightmarket Thai</h5>` + `<h6><a href="https://www.nightmarket.ie/" target="_blank">Bookings</a></h6>`,
          position: { lat: 53.323868, lng: -6.251101 }
        }, // Nightmarket Thai
        {
          name: `<h5>Delahunt</h5>` + `<h6><a href="https://delahunt.ie/" target="_blank">Bookings</a></h6>`,
          position: { lat: 53.323868, lng: -6.251101 }
        }, // Delahunt
        {
          name: `<h5>Restaurant Patrick Guilbaud</h5>` + `<h6><a href="https://restaurantpatrickguilbaud.ie/" target="_blank">Bookings</a></h6>`,
          position: { lat: 53.338394, lng: -6.253002 }
        }, // Restaurant Patrick Guilbaud
      ]
    }];

    var locationTypes2 = [{
      name: "Drinks",
      locations: [{
          name: `<h5>Toners</h5>` + `<h6><a href="http://www.tonerspub.ie/" target="_blank">What's the bar like</a></h6>`,
          position: { lat: 53.337757, lng: -6.252428 }
        }, // Toners 
        {
          name: `<h5>Doheny & Nesbitt</h5>` + `<h6><a href="http://dohenyandnesbitts.ie/" target="_blank">What's the bar like</a></h6>`,
          position: { lat: 53.338024, lng: -6.252970 }
        }, // Doheny & Nesbitt
        {
          name: `<h5>Hogans</h5>` + `<h6><a href="https://www.dublintown.ie/business/hogans/" target="_blank">What's the bar like</a></h6>`,
          position: { lat: 53.341978, lng: -6.264605 }
        }, // Hogans
        {
          name: `<h5>Fade Street Social Restaurant</h5>` + `<h6><a href="https://www.fadestreetsocial.com/" target="_blank">Bookings</a></h6>`,
          position: { lat: 53.342971, lng: -6.262812 }
        }, // Fade Street Social Restaurant 
        {
          name: `<h5>Peruke & Periwig</h5>` + `<h6><a href="https://peruke.ie/" target="_blank">What's the bar like</a></h6>`,
          position: { lat: 53.340099, lng: -6.258775 }
        } // Peruke & Periwig
      ]
    }];

    var locationTypes3 = [{
      name: "Attractions",
      locations: [
        { name: "Trinity", position: { lat: 53.343794, lng: -6.254579 } }, // Trinity College Dublin
        { name: "Oscar", position: { lat: 53.340848, lng: -6.250501 } }, // Monument of Oscar Wild Dublin
        { name: "Guinness", position: { lat: 53.341874, lng: -6.286709 } }, // Guinness storehouse
        { name: "Gallery", position: { lat: 53.340906, lng: -6.252502 } }, // National Gallery
        { name: "Famine", position: { lat: 53.348050, lng: -6.250057 } }, // Famine Mount 
      ]
    }];

    var locationTypes4 = [{
      name: "Accommodation",
      locations: [{
          name: `<h5>Buswells Hotel</h5>` + `<h6><a href="http://www.buswells.ie/" target="_blank">Enjoy your stay</a></h6>`,
          position: { lat: 53.340857, lng: -6.255657 }
        }, // Buswells Hotel
        {
          name: `<h5>Westbury Hotel</h5>` + `<h6><a href="http://www.westburymayfair.com/#local-area/?PS=LGEN_AA_DEMA_CGGL_TPRP&SWAQ=7M96&audland=&audbrand=&auddest=" target="_blank">Enjoy your stay</a></h6>`,
          position: { lat: 53.341485, lng: -6.261420 }
        }, // Westbury Hotel
        {
          name: `<h5>Merrion Hotel</h5>` + `<h6><a href="http://www.merrionhotel.com/=" target="_blank">Enjoy your stay</a></h6>`,
          position: { lat: 53.338535, lng: -6.252916 }
        }, // Merrion Hotel 
        {
          name: `<h5>Shelbourne Hotel</h5>` + `<h6><a href="https://www.theshelbournevouchers.ie/afternoon-tea-vouchers?gclid=EAIaIQobChMI2-eDuIS42wIVxG4bCh2O9gCPEAAYASAAEgIe-fD_BwE" target="_blank">Enjoy your stay</a></h6>`,
          position: { lat: 53.338944, lng: -6.256087 }
        }, // Shelbourne Hotel 
        {
          name: `<h5>Fitzwiliam Hotel</h5>` + `<h6><a href="https://www.fitzwilliamhoteldublin.com/" target="_blank">Enjoy your stay</a></h6>`,
          position: { lat: 53.339407, lng: -6.261448 }
        }, // Fitzwiliam Hotel 
      ]
    }];

    var locationTypes5 = [{
      name: "Sea",
      locations: [{
          name: `<h5>Fish Shack Café</h5>` + `<h6><a href="https://www.fishshack.ie/" target="_blank">Menu</a></h6>`,
          position: { lat: 53.289284, lng: -6.125383 }
        }, // Fish Shack Café
        {
          name: `<h5>Teddys Ice Cream</h5>` + `<h6><a href="https://http://teddys.ie//" target="_blank">All kings of flavours</a></h6>`,
          position: { lat: 53.290520, lng: -6.127653 }
        }, // Teddys Ice Cream
        {
          name: `<h5>Dun Laoghaire Harbour</h5>` + `<h6><a></a></h6>`,
          position: { lat: 53.294779, lng: -6.127700 }
        }, // Harbour 
        {
          name: `<h5>Sandycove Beach</h5>` + `<h6><a></a></h6>`,
          position: { lat: 53.288656, lng: -6.114498 }
        }, // Sandycove Beach 
        {
          name: `<h5>Royal Marine Hotel</h5>` + `<h6><a href="https://http://www.royalmarine.ie/?r=3748031&keyword=royal%20marine%20hotel&gclid=EAIaIQobChMIz9-Q54y42wIVh7HtCh0TwwAzEAAYASAAEgLk2_D_BwE//" target="_blank">Bookings</a></h6>`,
          position: { lat: 53.292286, lng: -6.133668 }
        }, // Royal Marine Hotel 
      ]
    }];

    // This function adds markers
    function addMarker(map, location) {
      var marker = new google.maps.Marker({
        position: location.position,
        map: map,
        title: location.name
      });

      var infowindow = new google.maps.InfoWindow({
        content: location.name
      });

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

      activeMarkers.push(marker);
    }

    function setup() {
      console.log("setting up");

      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lng: -6.223231, lat: 53.316624 }
      });

      for (var i = 0; i < locationTypes1[0].locations.length; i++) {
        addMarker(map, locationTypes1[0].locations[i]);
      }
      for (var j = 0; j < locationTypes2[0].locations.length; j++) {
        addMarker(map, locationTypes2[0].locations[j]);
      }
      for (var h = 0; h < locationTypes3[0].locations.length; h++) {
        addMarker(map, locationTypes3[0].locations[h]);
      }
      for (var k = 0; k < locationTypes4[0].locations.length; k++) {
        addMarker(map, locationTypes4[0].locations[k]);
      }
      for (var s = 0; s < locationTypes5[0].locations.length; s++) {
        addMarker(map, locationTypes5[0].locations[s]);
      }
    }

    function clearAllMarkers() {
      console.log("clearing markers");
      for (var i = 0; i < activeMarkers.length; i++) {
        var marker = activeMarkers[i];
        marker.setMap();
      }

      activeMarkers = [];
    }

    setup();

    $("#reset").click(function() {

      for (var j = 0; j < locationTypes2[0].locations.length; j++) {
        addMarker(map, locationTypes2[0].locations[j]);
      }
      for (var h = 0; h < locationTypes4[0].locations.length; h++) {
        addMarker(map, locationTypes4[0].locations[h]);
      }
      for (var i = 0; i < locationTypes1[0].locations.length; i++) {
        addMarker(map, locationTypes1[0].locations[i]);
      }
      for (var h = 0; h < locationTypes3[0].locations.length; h++) {
        addMarker(map, locationTypes3[0].locations[h]);
      }
      for (var s = 0; s < locationTypes5[0].locations.length; s++) {
        addMarker(map, locationTypes5[0].locations[s]);
      }
    });

    $("#bar").click(function() {
      clearAllMarkers();
      for (var j = 0; j < locationTypes2[0].locations.length; j++) {
        addMarker(map, locationTypes2[0].locations[j]);
      }
      console.log("drinks");
    });

    $("#stay").click(function() {
      clearAllMarkers();
      for (var h = 0; h < locationTypes4[0].locations.length; h++) {
        addMarker(map, locationTypes4[0].locations[h]);
      }
      console.log("Places to stay");
    });

    $("#Resturants").click(function() {
      clearAllMarkers();
      for (var i = 0; i < locationTypes1[0].locations.length; i++) {
        addMarker(map, locationTypes1[0].locations[i]);
      }
      console.log("Food");
    });

    $("#see").click(function() {
      clearAllMarkers();
      for (var h = 0; h < locationTypes3[0].locations.length; h++) {
        addMarker(map, locationTypes3[0].locations[h]);
      }
      console.log("Saw that");
    });

    $("#sea").click(function() {
      clearAllMarkers();
      for (var s = 0; s < locationTypes5[0].locations.length; s++) {
        addMarker(map, locationTypes5[0].locations[s]);
      }
      console.log("Saw that");
    });

    // Search Bar 
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        }
        else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
}
