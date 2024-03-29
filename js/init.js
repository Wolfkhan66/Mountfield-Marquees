(function($){
  $(function(){

     $('.sidenav').sidenav();
      $('.parallax').parallax();
      $('.carousel.carousel-slider').carousel({
          fullWidth: true,
          indicators: true
      });
      $('.materialboxed').materialbox();
  }); // end of document ready
})(jQuery); // end of jQuery name space


const map = L.map('map').setView([50.985538, 0.472921], 13);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function toggleSlide(direction) {
    var instance = M.Carousel.getInstance($('.carousel'));

    if (direction == "left") {
        instance.prev(); 
    } else {
        instance.next(); 
    }
}
