

$(function(){
    $('.select').find('input').focus(function(){
        $(this).val('')
        let thisSelect = $(this)
        let thisOptions =  thisSelect.next('.list-tips')
        let thisOption = thisOptions.find('li')
        thisOptions.fadeIn()
        thisOption.click(function(){
            let OptionVal = $(this).text()
            
            $(this).closest('.select').find('input').val(OptionVal)
        })
        $(this).focusout(function(){
            thisOptions.fadeOut()
        })
    })



    $('.profile-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                
              }
            },
            {
                breakpoint: 424,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                  
                }
              }
        ]
      });
    
    $('.burger').click(function(){
        $(this).toggleClass('active')
        $('.left-menu').fadeToggle()
        $('.left-menu').toggleClass('active')
        
        
    })


    $('.authuser-top').click(function(){
      if($('.authuser-top-drop').css('display') == 'block'){
        $('.authuser-top-drop').fadeOut()
      }
      else{
        $('.authuser-top-drop').fadeIn()
      }
    })
    $(document).mouseup(function (e){ 
      if($('.authuser-top-drop').css('display') == 'block'){
        var div = $(".authuser-top-drop"); 
        if (!div.is(e.target) 
            && div.has(e.target).length === 0) { 
          div.fadeOut()
        }
      }
    });

    $('#controle-filter').click(function(){
      if($(window).width() > 767){
        $('.top-checkbox').fadeToggle()
      }
      if($(window).width() < 768){
        $('.top-checkbox').slideToggle()
      }
      if($(window).width() < 992){
        $('.left-filter').slideToggle()
      }
        
    })

    $('.lang-check').find('input').click(function(){
       
        if ($(this).prop('checked')) {
            $('.lang-checkbox').find('input').removeAttr("disabled");
          } else {
            $('.lang-checkbox').find('input').attr("disabled", true);
            $('.lang-checkbox').find('input').prop( "checked", false );
          }
    })

    $('.hide-contact-phone').click(function(){
      if( $('#phone-number').prop( "disabled") == false){
        $('#phone-number').prop( "disabled", true );
        $('.text-help-is-hide-phone').text('(Зараз не відображається)')
      }
      else{
        $('#phone-number').prop( "disabled", false );
        $('.text-help-is-hide-phone').text('(зараз відображається в профілі)')
      }
    })

    $('.lang-check2').click(function(){

      if ($(this).prop('checked')) {
          $('.form-experience').slideDown();
        } else {
          $('.form-experience').slideUp();
        }
    })

    $('.add-city').click(function(){
      $('.city-block').append('<div class="select"><input  type="text" autocomplete="off" value="В Україні" placeholder="В Україні" class="js-main-region form-control" id="city"><ul class="list-tips" role="listbox" style="top: 40px; left: 0px; display: none;"><li role="option">Вінниця</li><li role="option">Києв</li><li role="option">Одесса</li></ul><div class="trash"></div></div>')
    })
    $(document).on('click touchstart', '.trash', function(){ 
      $(this).parents('.select').remove()
    });

    
    $(window).scroll(function() {
      if($(window).width() > 992){
        var height = $(window).scrollTop();
      
        if(height > 50){
        $('.fill').addClass('fill-fixed');
        
        } else{
        $('.fill').removeClass('fill-fixed');
        }
      }
      
    });

    //кастомизация скрола
   
    if($(window).width() > 576){
    $(document).ready(function() {
      $(".boxscroll").niceScroll({
        cursorborder:'none',
        cursorcolor:"#bfbfbf",
       
        cursoropacitymin:1,
        boxzoom:true
      });
    });
    }
    $(window).scroll(function() {
      if($(window).width() > 576){
        $(".boxscroll").getNiceScroll().onResize();
      }
    });
    
    

    //открыть чат
    
      $('.room-list-item').click(function(){
        if($(window).width() < 576){
          $('#room-nav').fadeOut(200)
        
          setTimeout(openBody, 500);
          function openBody() {
            $(' .layout-chat-main-container').addClass('active')
           
            $('.composer-panel').fadeIn(200)
            $('.room-body-head').fadeIn(200)
            $('#room-main-body').fadeIn(200)
          }
       }
      })

      $('.room-body-head__left').click(function(){
        if($(window).width() < 576){
        $('#room-main-body').fadeOut(200)
        $('.room-body-head').fadeOut(200)
        $('.composer-panel').fadeOut(200)
        $(' .layout-chat-main-container').removeClass('active')
        setTimeout(openBody, 500);
        function openBody() {
          
          $('#room-nav').fadeIn(200)
        }
      
       }
      })
      if($(window).width() < 576){
        $('#app').append( $('.composer-panel') );
      }
     
     function myFunction(){
       alert('1213')
     }
     
})