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
    var bridge = {
        lat: 51.1094937, 
        lng: 17.0503735
    };
    
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 4,
        center: bridge
    });
    
    var marker = new google.maps.Marker({
        position: bridge,
        map: map
    });
}

















