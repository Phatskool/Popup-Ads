$(document).ready(function() {
	
	if (document.cookie.indexOf("popupShown=true") == -1) {
		document.cookie = "popupShown=true; max-age=86400";//xronos cookie se sec
		setTimeout(function() {

				$('.popup-box').fadeIn( 2500 );
			
		},3000);
	}
	
	//$('body').append('<div id="blackout"></div>');
	var boxWidth = 400;
	//function centerBox() {
		
		/* Preliminary information */
		//var winWidth = $(window).width();
		//var winHeight = $(document).height();
		//var scrollPos = $(window).scrollTop();
		/* auto scroll bug */
		
		/* Calculate positions */
		
		//var disWidth = (winWidth - boxWidth) / 2
		//var disHeight = scrollPos + 150;
		
		/* Move stuff about */
		//$('.popup-box').css({'width' : boxWidth+'px', 'left' : disWidth+'px', 'top' : disHeight+'px'});
	//	$('#blackout').css({'width' : winWidth+'px', 'height' : winHeight+'px'});
	
		//return false;
	//}
	//Only for screen centering popup box	
	//$(window).resize(centerBox);
	//$(window).scroll(centerBox);
//	centerBox();	

	$('[class*=popup-link]').click(function(e) {
		/* Prevent default actions */
		e.preventDefault();
		e.stopPropagation();
		/* pare to id */
		var name = $(this).attr('class');
		var id = name[name.length - 1];
		var scrollPos = $(window).scrollTop();
		/* deikse to popup pou theloume//xrisimo an valoume kai alla, deikse to blackout kai disable to scroll */
		$('#popup-box-'+id).show();
		//$('#blackout').show();
		$('html,body').css('overflow', 'hidden');
		/* Firefox bug */
		$('html').scrollTop(scrollPos);
	});
	$('[class*=popup-box]').click(function(e) { 
		/* Stop link working on click if linked to popup */
		e.stopPropagation(); 
	});
//	$('html').click(function() { 
//		var scrollPos = $(window).scrollTop();
//		/* Hide the popup and blackout when clicking outside the popup - enable these functions only if you want a blackout(black background & noScroll)*/
//		$('[id^=popup-box-]').hide(); 
//		$('#blackout').hide(); 
//		$("html,body").css("overflow","auto");
//		$('html').scrollTop(scrollPos);
//	});
	$('.close').click(function() { 
		$("video").prop('muted', true);
		var scrollPos = $(window).scrollTop();
		/* krupse to popup kai svista ola otan o xristis patisei x */
		$('[id^=popup-box-]').hide(); 
		$('#blackout').hide(); 
		$("html,body").css("overflow","auto");
		$('html').scrollTop(scrollPos);
	});
	//mute functions
	$("video").prop('muted', true);

	$(".mute-video").click(function () {
		if ($("video").prop('muted')) {
			$("video").prop('muted', false);
			$(this).addClass('unmute-video');
		} else {
			$("video").prop('muted', true);
			$(this).removeClass('unmute-video');
		}
		console.log($("video").prop('muted'));
	});
});
