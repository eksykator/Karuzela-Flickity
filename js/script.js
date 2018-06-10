(function() {
    var templateSlideItem = document.getElementById('template-slide-item').innerHTML;
    
    Mustache.parse(templateSlideItem);
    var slidesList = '';
    for (var i = 0; i < slidesData.length; i++) {
        slidesList += Mustache.render(templateSlideItem, slidesData[i]);   
    }
    results.insertAdjacentHTML('beforeend', slidesList);
})();

var elem = document.querySelector('#results');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
    "hash": true
});

var button = document.querySelector('#restart-button');
button.addEventListener('click', function() {
    var flkty = new Flickity('#results');
    flkty.select(0);
})

var progressBar = document.querySelector('.progress-bar');

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

function initMap() {
    var bridge = slidesData[0].coords;
    
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 4,
        center: bridge
    });
    
    var place;
    for(var i = 0; i < slidesData.length; i++) {
        place = slidesData[i].coords;
        var marker = new google.maps.Marker({
            position: place,
            map: map
        });
        marker.index = i;
        marker.addListener('click', function() {
            var flkty = new Flickity('#results');
            flkty.select(this.index);
        }) 
    }
    
    flkty.on('change', function(index) {
        map.panTo(slidesData[index].coords);
    }); 
}
