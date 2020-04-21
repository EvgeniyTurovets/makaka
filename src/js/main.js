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
})