
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
			autohidemode: false,
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

		

	 // if the image in the window of browser when the page is loaded, show that image
    $(document).ready(function(){
           showImages('.star'); 
    });

    // if the image in the window of browser when scrolling the page, show that image
    $(window).scroll(function() {
            showImages('.star');
    });




	
	



