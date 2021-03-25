$(document).ready(function(){
    $('.enlaces').click(function(){
        let valor = $(this).attr('data-name')
        
        if(valor == 'todas'){
            $('.filtro').show('1000')
        }else{
            $('.filtro').not('.' + valor).hide('1000')
            $('.filtro').filter('.' + valor).show('1000')
        }

        $('ul .enlaces').click(function(){
            $(this).addClass('activo').siblings().removeClass()
        })
    })
})