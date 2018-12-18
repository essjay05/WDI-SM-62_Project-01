

let nearbyHikes = "https://www.hikingproject.com/data/get-trails?lat=34.0129&lon=-118.495&maxDistance=10&key=200396757-3d3fb5fb621382057bd6cea8231474d6";

axios.get(nearbyHikes)
    .then(res => {
        let hikeLoc = document.getElementById('map');
        // HIKE INFO
        let laHikes = res.data.trails;
        console.log(laHikes);
        laHikes.forEach( i => {
            // console.log(res.data.trails);
            let lat = i.latitude;
            let lng = i.longitude;
            var latLng = new google.maps.LatLng(lat, lng);
            var custMark = '../images/mountain-range.png';
            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                icon: {
                    url: custMark,
                    scaledSize: new google.maps.Size(20, 20)
                }
            })
         })
    });

// CREATING MAP USING COORDINATES
var map
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 34.013, lng: -118.495},
            zoom: 8
        })
    }
initMap()
        
// -------- POTENTIAL BONUS FEATURE ------------- //
// Update COMPLETE/INCOMPLETE status
// var toggleButton = $('toggleButton');
// toggleButton.on('click, function')
// toggleButton.data('text-original', toggleButton.text());
// toggleButton.text(toggleButton.data('text-swap'));

// $('toggleButton').on('click', function() {
//     let el = $(this);
//     if (el.text() == el.data('text-swap')) {
//         el.text(el.data('text-original'));
//     } else {
//         el.data('text-original', el.text());
//         el.text(el.data('text-swap'));
//     }
// });