
$(document).ready( function(){

  //I looked up how to make the nav bar fix on scroll for fun. :)
  //This function listens for the window to scroll, 
  $(window).scroll(function(){
    var stickynav = $('.stickyNav'),  //gets elements with the class of 'stickyNav',
        scroll = $(window).scrollTop();

    if (scroll >= 100){ //and if the scroll is past 100px, changes the class of that element so that it's fixed at the top of the page.
      stickynav.addClass('fixtop');
    } 
    else {  //and if the window is returned to the top of the page, the fixed class is removed. 
      stickynav.removeClass('fixtop');
    }
  });
});