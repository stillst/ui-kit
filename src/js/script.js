$( document ).ready(function() 
{  //slider 
   $(function()
   {
      $("#slides").slides({
        
        play: 3000,
        pause: 2500,
        hoverPause: true    
      });
    });
   //tabs 
   $(function()
   {
  	  $(document).on('click', '.tabs--menu-item', function()
      {   

        var index = $(this).index();
        $(".tabs--menu .tabs--menu-item").each(function()
        {
            $(this).removeClass("tabs--menu-item__active"); 
        });

        $(this).addClass("tabs--menu-item__active"); 
        
        $(".tabs--articles .tabs--article").each(function()
        {
            $(this).removeClass("tabs--article__active"); 
        });

        $(".tabs--article").eq(index).addClass("tabs--article__active");         
          /*$(".tabs--menu-item").removeClass("tabs--menu-item__active"); 
          $(this).addClass("tabs--menu-item__active"); */
      });
   });   
      /*//popup options
    	$(document).on('click', '.js-message_link', function(e)
    	{	 			 		
			    e.preventDefault();
        if($(".js-message_link").next().hasClass('js-popup'))
        {
          $(".js-popup").remove();
        }
        else
        {
            $(".js-message_link").parent().append("<p class='js-popup'>Положение сложное Соня</p>");       
        }
		  });	  
    	$(document).on('click', '.js-popup', function()
    	{	 			 			 			
		    	 $(".js-popup").remove();
    	}); 
      */    
 });
