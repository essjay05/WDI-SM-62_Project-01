console.log('Loaded');


function showFulllist() {
// ADD LOCATIONS TO TAKEAHIKE.EJS
axios.get('/api/hikes')
    .then(res => {
        let list = res.data.hikes;
        console.log(res.data.hikes);
        list.forEach( i => {
            // THIS IS TO GET THE COORDINATES
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
}

        
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