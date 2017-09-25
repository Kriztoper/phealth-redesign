// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

// When the user is at the bottom of the page
window.onscroll = function() {
    if($(window).scrollTop() > 150)
        $("#menu-buttons").css({"position": "fixed",
            "z-index": "1000", "top":"0"});
    else
        $("#menu-buttons").css({"position": "relative",
            "top":"100"});

   if($(window).scrollTop() + $(window).height() > $(document).height() - 800) {
       $(".fixed-action-btn").fadeIn(1000);
   } else {
		$(".fixed-action-btn").fadeOut();
   }
};