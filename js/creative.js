/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Activate Portfolio box caption
    $(".portfolio-box").on("touchstart", function(){
	$(this).parent().parent().find(".active").removeClass("active");
	$(this).addClass("active");
    });
    

    // Video stop when modal close
    var src = $("#robocon iframe").attr("src");
    $("#robocon").on("shown.bs.modal", function(e){
	$(this).find("iframe").attr("src", src);
    });
    $("#robocon").on("hidden.bs.modal", function(e){
	$(this).find("iframe").attr("src", "");
    });
    $("#robocon iframe").attr("src", "");			   

    // Initialize slider
    var options = {$Duration:1200,y:1,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Opacity:2,$Round:{$Left:0.75,$Top:0.5},$Assembly:2049,
		   $Duration:1200,x:0.6,$Easing:{$Left:$JssorEasing$.$EaseInOutExpo},$Opacity:2,
		   $AutoPlay: true };
    //var jssor_slider1 = new $JssorSlider$('slider-container', options);

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
