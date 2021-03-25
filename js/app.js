//let firstName = $("#nombre").val()

let reserva = [] 
let personas = []    

let grupal;



/**MODAL */

modal()

function modal(){
    $('#modal').css("height", "auto")

$('#btn').click(function(){
    $('#modal').modal()
})
    $('#modal').css("height", "auto")

$('#submit').click(function(){
    $('#modal-menu').modal()
    suReserva()
})

}
// /**FORMULARIO*/

$('#form').submit(function(e){
     e.preventDefault()     

    

      if(reserva.length < 10){
          reserva.push(calendario.val())
          
      }else{
          alert("El local se encuentra lleno")
      }

      personas.push($('option:selected').val()) 
     reserva.push($('option:selected').val()) 

      console.log(reserva)
      console.log($("#nombre").val())

     calendario.val('')

     $('#submit').val('Guardado')

})

function suReserva(){
    
    $('#modal-menu').append(`<p>Ya se reservó tu mesa ${$("#nombre").val()} ${$("#apellido").val()}!</p>`)
    


}





/** CALENDAR */

let calendario = $('#calendar')
    calendario.datetimepicker({         
        inline: false,   
        });

    calendario.css( 'width', 'auto')

     







    //Selector Theme
    const btnSelector = $('#theme-selector')

    let theme = $('#theme')
    let darkMode;

btnSelector.click(function(){
    $('#to-moon').click(function(){
        darkMode = 'true'
        localStorage.setItem('darkMode', darkMode)
        theme.attr('href', 'css/moon.css')
   
   })
   
   $('#to-light').click(function(){  
       
       darkMode = 'false'
       localStorage.setItem('darkMode', darkMode)  
       theme.attr('href', 'css/light.css') 
        
   
   })
})

if (localStorage.getItem('darkMode') == 'true'){
        theme.attr('href', 'css/moon.css')
        $('#to-moon').addClass('active')  
    }else{
        theme.attr('href', 'css/light.css')
        $('#to-light').addClass('active')
    }

    //Mouse hover

    $("#to-moon").hover( mouseOver, mouseOut )

function mouseOver() {
    $(this).css("color", "#F2994A")
}

function mouseOut() {
    $(this).css("color", "#fff")
}
   
    $("#to-light").hover( mouseOver, mouseOut )
    
    function mouseOver() {
        $(this).css("color", "#F2994A")
    }
    
    function mouseOut() {
        $(this).css("color", "#fff")
    }


/*********** AJAX */


$('#reservaMenu').on('click',function(){
    $.ajax({
        url: './menu.json',
        type: 'GET',
        datatype: "json"
    })
    .done(function(request){
        
        $('.reservaMenu').css({background:'#7af24a'})
        $('.titulo').html('<span>Elegí uno de la lista</span>')

        let tabla = ""

           $('#precio-empanadas').click(function(){
          
            tabla+= "<table class='table table-striped justify-content-center'>"
            tabla+="<tr><th>Id</th><th>Empanadas</th><th>Precio</th></tr>"
                for(let i = 0; i<request.empanadas.length;i++){
                    tabla+= "<tr><td>#"+ [i+1] +"</td><td>"+request.empanadas[i].nombre+"</td>"+
                    "<td>$ "+request.empanadas[i].precio+".-</td></tr>"
                    }

                tabla+="</table>"
                
                $('#tabla').html(tabla).scroll()
          })
        
        

          $('#precio-pizzas').click(function(){
          
            tabla+= "<table class='table table-striped'>"
            tabla+="<tr><th>Id</th><th>Pizzas</th><th>Precio</th></tr>"
                for(let i = 0; i<request.pizzas.length;i++){
                    tabla+= "<tr><td>#"+ [i+1] +"</td><td>"+request.pizzas[i].nombre+"</td>"+
                    "<td>$ "+request.pizzas[i].precio+".-</td></tr>"
                    }

                tabla+="</table>"
                
                $('#tabla').html(tabla).scroll()
          })

          $('#precio-sandwich').click(function(){
          
            tabla+= "<table class='table table-striped justify-content-center'>"
            tabla+="<tr><th>Id</th><th>Sandwich</th><th>Precio</th></tr>"
                for(let i = 0; i<request.sandwich.length;i++){
                    tabla+= "<tr><td>#"+ [i+1] +"</td><td>"+request.sandwich[i].nombre+"</td>"+
                    "<td>$ "+request.sandwich[i].precio+".-</td></tr>"
                    }

                tabla+="</table>"
                
                $('#tabla').html(tabla).scroll()
          })
       
    })
    .fail(function(xhr,status,error){
        console.log(xhr)
        console.log(status)
        console.log(error)
    })
})




