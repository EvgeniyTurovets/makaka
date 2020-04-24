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


    $('.authuser-top').hover(function(){
        $('.authuser-top-drop').fadeIn()
    })
    $('.authuser-top').mouseleave(function(){
        $('.authuser-top-drop').fadeOut()
    })

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
})