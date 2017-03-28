$(function(){
    $("#gotop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },1000);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 2500){
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });
});
$(function(){
	
	$('#button2').click(function(){
	
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: 768
		}, 600);
 
		return false;
	});
});
$(function(){
	
	$('#button1').click(function(){
	
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: 2304
		}, 600);
 
		return false;
	});
});
$(function(){
	
	$('#icon01').click(function(){
	
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: 5450
		}, 600);
 
		return false;
	});
});
$(function(){
	
	$('#icon02').click(function(){
	
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: 4680
		}, 600);
 
		return false;
	});
});
$(function(){
	
	$('#icon03').click(function(){
	
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: 3840
		}, 600);
 
		return false;
	});
});
$(function(){
	
	$('#icon04').click(function(){
	
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: 3080
		}, 600);
 
		return false;
	});
});