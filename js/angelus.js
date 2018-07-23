$(document).ready(function(){
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        autoplay:false,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        dotsContainer:'.cont-dots',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    
    
//    function initMap() {
//        var myLatLng = {lat: 19.4160447, lng: -99.1551579};
//        // Styles a map in night mode.
//        var map = new google.maps.Map(document.getElementById('map'), {
//          center: myLatLng,
//          zoom: 20,
//          styles: [
//              {
//                elementType: "geometry",
//                stylers: [
//                  {
//                    color: "#f5f5f5"
//                  }
//                ]
//              },
//              {
//                elementType: "labels.icon",
//                stylers: [
//                  {
//                    visibility: "off"
//                  }
//                ]
//              },
//              {
//                elementType: "labels.text.fill",
//                stylers: [
//                  {
//                    color: "#616161"
//                  }
//                ]
//              },
//              {
//                elementType: "labels.text.stroke",
//                stylers: [
//                  {
//                    color: "#f5f5f5"
//                  }
//                ]
//              },
//              {
//                featureType: "administrative.land_parcel",
//                elementType: "labels.text.fill",
//                stylers: [
//                  {
//                    color: "#bdbdbd"
//                  }
//                ]
//              },
//              {
//                featureType: "poi",
//                elementType: "geometry",
//                stylers: [
//                  {
//                    color: "#eeeeee"
//                  }
//                ]
//              },
//              {
//                featureType: "poi",
//                elementType: "labels.text.fill",
//                stylers: [
//                  {
//                    color: "#757575"
//                  }
//                ]
//              },
//              {
//                featureType: "poi.park",
//                elementType: "geometry",
//                stylers: [
//                  {
//                    color: "#e5e5e5"
//                  }
//                ]
//              },
//              {
//                featureType: "poi.park",
//                elementType: "labels.text.fill",
//                stylers: [
//                  {
//                    color: "#9e9e9e"
//                  }
//                ]
//              },
//              {
//                featureType: "road",
//                elementType: "geometry",
//                stylers: [
//                  {
//                    color: "#ffffff"
//                  }
//                ]
//              },
//              {
//                featureType: "road.arterial",
//                elementType: "labels.text.fill",
//                stylers: [
//                  {
//                    color: "#757575"
//                  }
//                ]
//              },
//              {
//                featureType: "road.highway",
//                elementType: "geometry",
//                stylers: [
//                  {
//                    color: "#dadada"
//                  }
//                ]
//              },
//              {
//                featureType: "road.highway",
//                elementType: "labels.text.fill",
//                stylers: [
//                  {
//                    color: "#616161"
//                  }
//                ]
//              },
//              {
//                featureType: "road.local",
//                elementType: "labels.text.fill",
//                stylers: [
//                  {
//                    color: "#9e9e9e"
//                  }
//                ]
//              },
//              {
//                featureType: "transit.line",
//                elementType: "geometry",
//                stylers: [
//                  {
//                    "color": "#e5e5e5"
//                  }
//                ]
//              },
//              {
//                featureType: "transit.station",
//                elementType: "geometry",
//                stylers: [
//                  {
//                    color: "#eeeeee"
//                  }
//                ]
//              },
//              {
//                featureType: "water",
//                elementType: "geometry",
//                stylers: [
//                  {
//                    color: "#c9c9c9"
//                  }
//                ]
//              },
//              {
//                featureType: "water",
//                elementType: "labels.text.fill",
//                stylers: [
//                  {
//                    color: "#9e9e9e"
//                  }
//                ]
//              }
//            ]
//        });
//        
//        
//        
//             
//    var marker = new google.maps.Marker({
//        position: myLatLng,
//        map: map,
//        icon: 'http://maps.google.com/mapfiles/ms/icons/black-dot.png'
//    });
//             
//    // To add the marker to the map, call setMap();
//    marker.setMap(map);         
//             
// }
//    
//   
//    
//    initMap();
//    
    
    
    
    
});