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
})