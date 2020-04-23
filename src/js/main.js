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
        $('.left-menu').toggleClass('active')
        $('.authuser-bot').fadeToggle()
        
    })
    $('.authuser-top').hover(function(){
        $('.authuser-top-drop').fadeIn()
    })
    $('.authuser-top').mouseleave(function(){
        $('.authuser-top-drop').fadeOut()
    })
})