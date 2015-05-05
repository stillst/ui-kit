$( document ).ready(function() 
{  
  //slider 
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
      $(document).on('click', '.tabs__menu-item', function()
      {  
        var index = $(this).index();            
        $(".tabs__menu-item--active").removeClass("tabs__menu-item--active");        
        $(this).addClass("tabs__menu-item--active");                       
        $(".tabs__article--active").removeClass("tabs__article--active");        
        $(".tabs__article").eq(index).addClass("tabs__article--active");                   
      });
   });  

   //rangeslider
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
      function(a)
      {
        $(this).html("<span>"+a+"</span>")
      });
      
      //$(".epick-slider-steps--pill__active").draggable({ grid: [100,50] });
    });

   //tree-steps-slider
   $(function()
   {
   
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
});