/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#797979" });
 });
 
 $( "a.ico-pin" ).click( function () {
        $( "#header" ).toggleClass( "active" );
    });
	
	$( ".links a.ico-close" ).click( function () {
		$( "#header" ).removeClass( "active" );
		});
		
		$( ".top-header a.ico-pin" ).click( function () {
        $( "#header" ).toggleClass( "active" );
    });
	
	$( ".links a.ico-close" ).click( function () {
		$( "#header" ).removeClass( "active" );
		});
		
		
	 $("#flexiselDemo4").flexisel({
		
        visibleItems: 1,
        animationSpeed: 700,
        autoPlay: false,
        autoPlaySpeed: 8000,            
        pauseOnHover: true,
        enableResponsiveBreakpoints: false,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 1
            },
            tablet: { 
                changePoint:768,
                visibleItems: 1
            }
        }
    });
	
	(function($){
	'use strict';

	var DO = function(o, e){
		$(o).html('');
	};

	$('.container .half-box-big .image-box, .container .half-box-little .image-box').on('click', function(e){
		DO(this, e);
	});

	$('.container .half-box-big .image-box, .container .half-box-little .image-box').on('tap', function(e){
		DO(this, e);
	});
})(jQuery);
