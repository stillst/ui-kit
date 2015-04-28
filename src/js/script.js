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


   $(function()
   {
      
      $(".rangeslider").noUiSlider({
        start:[1200,9500],
        step:100,
        connect:!0,
        range:{min:0,max:15000},
        format:wNumb({decimals:0,postfix:"Р"})
      });

      $(".rangeslider").Link("lower").to('-inline-<div class="rangeslider-tooltip"></div>',
        function(a)
        {
           $(this).html("<span>"+a+"</span>")
        });

      $(".rangeslider").Link("upper").to('-inline-<div class="rangeslider-tooltip"></div>',
         function(a){
          $(this).html("<span>"+a+"</span>")
         });


       $(".percentslider").noUiSlider({
        start:0,
        step:1,     
        range:{min:0,max:100},
        format:wNumb({decimals:0,postfix:"%"})
      });

        $(".percentslider").Link("lower").to('-inline-<div class="percentslider-tooltip"></div>',
        function(a)
        {
           $(this).html("<span>"+a+"</span>")
        });

     
    /*
      $("#three-step-slider").noUiSlider({
        range: {
            'min': 0,            
            '50%': 50,            
            'max': 100
        },
        snap: true,
        start: [0]
      });
*/
      //$(".epick-slider-steps--pill__active").draggable({ grid: [100,50] });

      $(document).on('click', '.epick-slider-steps--pill__start', function()
      { 
        $(".epick-slider-steps--pill__half").css('background-color','#e6e9ed');                      
        $(".epick-slider-steps--pill__finish").css('background-color','#e6e9ed'); 
        $(".epick-slider-steps--range__start").css('background-color','#e6e9ed');
        $(".epick-slider-steps--range__finish").css('background-color','#e6e9ed');                
        $(".epick-slider-steps--pill__active").css('left','20px'); 
      });

      $(document).on('click', '.epick-slider-steps--pill__half', function()
      {   
        $(".epick-slider-steps--pill__half").css('background-color','#fc6e51');                      
        $(".epick-slider-steps--pill__finish").css('background-color','#e6e9ed');
        $(".epick-slider-steps--range__start").css('background-color','#fc6e51');
        $(".epick-slider-steps--range__finish").css('background-color','#e6e9ed');              
        $(".epick-slider-steps--pill__active").css('left','255px');  
      });

      $(document).on('click', '.epick-slider-steps--pill__finish', function()
      {   

        $(".epick-slider-steps--pill__half").css('background-color','#fc6e51');                      
        $(".epick-slider-steps--pill__finish").css('background-color','#fc6e51');
        $(".epick-slider-steps--range__start").css('background-color','#fc6e51');
        $(".epick-slider-steps--range__finish").css('background-color','#fc6e51');              
        $(".epick-slider-steps--pill__active").css('left','487px'); 
      });


      $(document).on('click', '.epick-slider-steps--range__start', function()
      { 

        var margin_left = $('.epick-slider-steps--pill__active').css('left');
        console.log(margin_left); 
        if (margin_left == '20px')
        {
            $(".epick-slider-steps--pill__half").css('background-color','#fc6e51');                      
            $(".epick-slider-steps--pill__finish").css('background-color','#e6e9ed');
            $(".epick-slider-steps--range__start").css('background-color','#fc6e51');
            $(".epick-slider-steps--range__finish").css('background-color','#e6e9ed');              
            $(".epick-slider-steps--pill__active").css('left','255px');  
        }
        else if (margin_left == '255px')
        {
          $(".epick-slider-steps--pill__half").css('background-color','#e6e9ed');                      
          $(".epick-slider-steps--pill__finish").css('background-color','#e6e9ed'); 
          $(".epick-slider-steps--range__start").css('background-color','#e6e9ed');
          $(".epick-slider-steps--range__finish").css('background-color','#e6e9ed');                
          $(".epick-slider-steps--pill__active").css('left','20px'); 
        }

        else if (margin_left == '487px')
        {
          $(".epick-slider-steps--pill__half").css('background-color','#fc6e51');                      
          $(".epick-slider-steps--pill__finish").css('background-color','#e6e9ed');
          $(".epick-slider-steps--range__start").css('background-color','#fc6e51');
          $(".epick-slider-steps--range__finish").css('background-color','#e6e9ed');              
          $(".epick-slider-steps--pill__active").css('left','255px');
        }       
      });


      $(document).on('click', '.epick-slider-steps--range__finish', function()
      { 

        var margin_left = $('.epick-slider-steps--pill__active').css('left');
        console.log(margin_left); 
        if (margin_left == '20px')
        {
            $(".epick-slider-steps--pill__half").css('background-color','#fc6e51');                      
            $(".epick-slider-steps--pill__finish").css('background-color','#e6e9ed');
            $(".epick-slider-steps--range__start").css('background-color','#fc6e51');
            $(".epick-slider-steps--range__finish").css('background-color','#e6e9ed');              
            $(".epick-slider-steps--pill__active").css('left','255px');  
        }
        else if (margin_left == '255px')
        {
          $(".epick-slider-steps--pill__half").css('background-color','#fc6e51');                      
          $(".epick-slider-steps--pill__finish").css('background-color','#fc6e51');
          $(".epick-slider-steps--range__start").css('background-color','#fc6e51');
          $(".epick-slider-steps--range__finish").css('background-color','#fc6e51');              
          $(".epick-slider-steps--pill__active").css('left','487px'); 
        }

        else if (margin_left == '487px')
        {
          $(".epick-slider-steps--pill__half").css('background-color','#fc6e51');                      
          $(".epick-slider-steps--pill__finish").css('background-color','#e6e9ed');
          $(".epick-slider-steps--range__start").css('background-color','#fc6e51');
          $(".epick-slider-steps--range__finish").css('background-color','#e6e9ed');              
          $(".epick-slider-steps--pill__active").css('left','255px');
        }       
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
