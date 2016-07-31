//menu action
var mainMenu= function(){
   $(".icon-bar").click(function(){
   	 $(this).fadeOut('fast');
   	 $(".menu").animate({left:'0px'},300);
   	
       
   });
   $(".icon-close").click(function(){
   	 $(".menu").animate({left:'-285px'},200);
   	 $(".icon-bar").fadeIn('slow');


   });

};
$(document).ready(mainMenu);

 var link = function(){
 $('li').click(function() {
   $(".menu").animate({left:'-285px'},100);;
   	$(".icon-bar").fadeIn('fast');
   });
};

$(document).ready(link);

//hover action
$(document).ready(function(){
  $(".menu-link").mouseover(function(){
      $(this).addClass('highlighted');
  	});
  $(".menu-link").mouseout(function(){
      $(this).removeClass('highlighted');
  	});
});

//show slider
var slider = function(){
	$(".learn-more").click(function(){
		 $(".main-banner").effect('explode');
		 $(".main-content").fadeIn('fast');
	});
};
$(document).ready(slider);


$(document).ready(function(){
  $("input[type='submit']").click(function(){
     alert('Thank you for your question! Our manager will call you back.');
  });
  
});

