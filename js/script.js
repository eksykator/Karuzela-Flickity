var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
    "hash": true
});

var button = document.querySelector('#restart-button');
button.addEventListener('click', function() {
    var flkty = new Flickity('.main-carousel');
    flkty.select(0);
})

var progressBar = document.querySelector('.progress-bar');

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});