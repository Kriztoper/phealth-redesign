// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

// When the user is at the bottom of the page
window.onscroll = function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 800) {
       $(".fixed-action-btn").fadeIn(1000);
   } else {
		$(".fixed-action-btn").fadeOut();
   }
};