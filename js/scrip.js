
$(document).ready(function() {
    $(window).stellar();
    
});

$(document).ready(

  function() { 

    $("html").niceScroll({
        cursorcolor:"rgba(30,30,30,.5)",
        zindex:999,
        scrollspeed:100,
        mousescrollstep:10,
        cursorborder:"0px solid #fff",
    });
	
	
	
			var ypos,image;
			function parallex() {
			image = document.getElementById('image');
			ypos = window.pageYOffset;
			image.style.top = ypos * .7+ 'px';
			}
			window.addEventListener('scroll', parallex),false;

		
		


      

  }

);




