    (function() {
 
  "use strict";
 
  var toggles = document.querySelectorAll(".dropdown-toggle");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  }
 
})();
      $(document).ready(function() {
    $(".fancybox").fancybox();
  });
     $(".fancybox").fancybox({
    helpers : {
        overlay : {
            css : {
                'background' : 'rgba(58, 42, 45, 0.95)'
            }
        }
    }
}); 
var t0, scrollTime;

$('#toTop').hide().on('click', function(event){
  event.preventDefault();
  scrollTime = $(document).scrollTop() / 2;
  $('body').animate({scrollTop:0}, scrollTime);
});

$(window).on('scroll', function(){
  clearTimeout(t0);
  t0 = setTimeout(function () {
      showScrollTopButton();
      console.log('scroll');
    }, 50);
});

showScrollTopButton();

function showScrollTopButton(){
  if ( $(document).scrollTop() >= 300 ) {
    $('#toTop').fadeIn();
  }
  else {
    $('#toTop').fadeOut();
  }
}
