(function($){

	$( '#cbp-qtrotator' ).cbpQTRotator();

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	/*$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
	});*/

$(document).ready(function() {

	        /* ---------------------------------------------- /*
		 * Skills
        /* ---------------------------------------------- */    
        //var color = $('#home').css('backgroundColor');

        $('.skills').waypoint(function(){
            $('.chart').each(function(){
            $(this).easyPieChart({
                    size:140,
                    animate: 2000,
                    lineCap:'butt',
                    scaleColor: false,
                    barColor: '#FF5252',
                    trackColor: 'transparent',
                    lineWidth: 10
                });
            });
        },{offset:'80%'});

		/* ---------------------------------------------- /*
		 * Navbar
		/* ---------------------------------------------- */

		$('.header').sticky({
			topSpacing: 0
		});

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 70
		})


	/* ---------------------------------------------- /*
		 * Home BG
		/* ---------------------------------------------- */

		$(".screen-height").height($(window).height());

		$(window).resize(function(){
			$(".screen-height").height($(window).height());
		});

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			$('#home').css({'background-attachment': 'scroll'});
		} else {
			$('#home').parallax('50%', 0.1);
		}

	/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();

		/* ---------------------------------------------- /*
		 * Smooth scroll / Scroll To Top
		/* ---------------------------------------------- */

		$('a[href*=\\#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}

			if (scrollY == 0){
				$('.wow').removeClass('animated').css('visibility','hidden').css('animation-name','none');
				wow = new WOW({
					mobile: false
				});
				wow.init();
			}

		});

	});


})(jQuery);

/* ---------------------------------------------- /*
         * Same height elements
/* ---------------------------------------------- */

/*Same height element*/

/*array with elements to adjust*/
var sameHeightObject = {};

/* change the height of an element */
function resizeHeight(scope,height){
    $(scope).height(height);
}

/* calculate the height of the highest element and assigns it to the others */
function resizeMaxHeight(object) {
    $.each(object,function (key, value) {
        $(key).css('height','auto');
        if (getMaxHeight(key)!=value){
            resizeHeight(key,getMaxHeight(key));
            sameHeightObject[key] = getMaxHeight(key);
        }else{
            resizeHeight(key,value);
        }
    });
}

/* return the max height of an element css*/
function getMaxHeight(scope){
    return Math.max.apply(null, $(scope).map(function (){
        return $(this).height();
    }).get());
}

/* recalculates the height when changing the size of the screen */
var sameHeight = function (){
    $(window).resize(function() {
        resizeMaxHeight(sameHeightObject);
    });
}

/* fill the sameHeightObject to recalculated the elements and adjust the height in the first execute*/
var pushSameHeight = function (scope){
    sameHeightObject[scope] = getMaxHeight(scope);
    resizeHeight(scope,getMaxHeight(scope));
}

