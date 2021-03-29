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

    $(".imagen:hover").hover(textImg)

    function textImg(){
        $(".imagen:hover").hover( mouseOver , mouseOut )
    
        function mouseOver() {
            $(this).css({'transform': 'scale(1.2)', 'transition': 'all ease 1.5s'})
           $('.img-overlay').css({'opacity': 1, 'transform': 'translateY(0)'})
           
        }
       
        function mouseOut() {
           $('.img-overlay').css('opacity', 0)
        }
    }


})