$( document ).ready(function() 
    {  //slider options
       $(function(){
          $("#slides").slides({
            
            play: 3000,
            pause: 2500,
            hoverPause: true    
          });
        
			//popup options
        	$(document).on('click', '.js-message_link', function(e)
        	{	 			 		
	 			e.preventDefault();
	 			 $(".js-message_link").parent().append("<p class='js-popup'>Положение сложное Соня</p>");
			}); 

        	$(document).on('click', '.js-popup', function()
        	{	 			 			 			
	 			 $(".js-popup").remove();
			}); 

        });
    });