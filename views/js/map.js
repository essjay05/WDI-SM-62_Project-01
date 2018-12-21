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
            var latLng = new L.LatLng(lat, lng);
            var custMark = '../images/mountain-range.png';
                custMark = new L.marker;
            L.marker([latLng]).addTo(map);
            })
         })
    };
    showFullList();
    
    var mymap = L.map('mapId').setView([34.013, -118.495], 8);
     // load a tile layer
    L.tileLayer('http://tiles.mapc.org/basemap/{z}/{x}/{y}.png',
    {
      attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
      maxZoom: 17,
      minZoom: 9
    }).addTo(map);


        
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

 
// ATTEMPT AT LEAFLET MAP
// function showFulllist() {
//     // ADD LOCATIONS TO TAKEAHIKE.EJS
//     axios.get('/api/hikes')
//     .then(res => {
//         let list = res.data.hikes;
//         console.log(res.data.hikes);
//         list.forEach( i => {
//             // THIS IS TO GET THE COORDINATES
//             let lat = i.latitude;
//             let lng = i.longitude;
//             var latLng = new L.LatLng(lat, lng);
//             var custMark = '../images/mountain-range.png';
//                 custMark = new L.marker;
//             L.marker([latLng]).addTo(map);
//             })
//          })
//     };
//     showFullList();
    
//     var mymap = L.map('mapId').setView([34.013, -118.495], 8);
//      // load a tile layer
//     L.tileLayer('http://tiles.mapc.org/basemap/{z}/{x}/{y}.png',
//     {
//       attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
//       maxZoom: 17,
//       minZoom: 9
//     }).addTo(map);

//     </script> 