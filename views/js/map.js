console.log('Loaded');


function showFulllist() {
// ADD LOCATIONS TO TAKEAHIKE.EJS
axios.get('/api/hikes')
    .then(res => {
        let list = res.data.hikes;
        console.log(res.data.hikes);
        let output = document.getElementById('info');
        // HIKE INFO
        output.innerHTML('');
        list.forEach( i => {
            output.append(`
            <div class="hikeBox">
                <h4 class="hikeObj"><%= i.name %> </h4>
                <p>${i.length} miles </p>
                <p>${i.location} </p>
                <p>${i.summary} </p>
                <p>${i.latitude} </p>
                <p>${i.longitude} </p>
                <p class="hikeEndObj"><a href="${i.trailUrl}</a></p>
                <form method="post" action="/users/profile${i}?_method=PATCH">
                    <button type="patch" class="btn-sm btn-success addUser col-2" name="addUser">
                        Completed
                        ${user.hikes.push(i.name)}
                    </button>
                </form>
                <form method="post" action="/users/profile${i}?_method=PATCH">
                    <button type="patch" class="btn-sm btn-danger removeUser col-2" name="removeUser">
                    Not Completed
                    ${user.hikes.pop(i.name)}
                    </button>
                </form>
            </div> `)
            
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