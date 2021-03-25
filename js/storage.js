$('.reservaMenu').on("click",function(){
    $.ajax({
        url: './menu.json',
        type: 'GET',
        datatype: "json"
    })
    .done(function(request){

        let tabla = ""

            console.log(request.carnes.length)

           $('#carnes').on("click",function(){
          
            tabla+= "<table class='table table-striped justify-content-center'>"
                for(let i = 0; i<request.carnes.length;i++){
                    tabla+= "<tr><td>"+request.carnes[i].nombre+"</td>"
                    "<td>$ "+request.carnes[i].precio+".-</td></tr>"
                    }

                tabla+="</table>"
                
                $('#tabla').html(tabla)
          })
        
        

          $('#pizzas').on("click",function(){
          
            tabla+= "<table class='table table-striped'>"
                for(let i = 0; i<request.pizzas.length;i++){
                    tabla+= "<tr><td>ID</td><td>"+request.pizzas[i].nombre+"</td><td>$ "+request.pizzas[i].precio+".-</td></tr>"
                  
                    }

                tabla+="</table>"
                
                $('#tabla').html(tabla)
          })
       
    })
    .fail(function(xhr,status,error){
        console.log(xhr)
        console.log(status)
        console.log(error)
    })
})


function mostrarTabla(){
    
    let columna =1
    let tabla = ""
    
    let numero = [1,2,3]
    let arr = ['hola','despues','hablamos']
    let num = ['4,5,6']
    let fila = arr.length
    
    tabla+= "<table class='table table-striped'>"
        for(let i = 1; i<=fila;i++){
            tabla+= "<tr>"
                for(let x = 1; x <= columna;x++){
                    tabla+= '<td>'+arr[i]+'</td>'
                }
                tabla+= '</tr>'
                    tabla+= "<tr>"
                    for(let x = 1; x <= columna;x++){
                        tabla+= '<td>'+numero[x]+'</td>'
                    }
                    tabla+= '</tr>'

                    tabla+= '</tr>'
                    tabla+= "<tr>"
                    for(let x = 1; x <= columna;x++){
                        tabla+= '<td>'+num[x]+'</td>'
                    }
                    tabla+= '</tr>'
        }

        tabla+="</table>"
    
    $('#tabla').html(tabla)
}

 $('#boton').click(function(){
     console.log('Ok')
     nuevaTabla()
 })


 function nuevaTabla(){

     let numero = [1,2,3]
     let arr = ['hola','despues','hablamos']
     let num = ['4,5,6']
     let fila = arr.length

     tabla+= "<table class='table table-striped'>"
     for(let i = 1; i<=fila;i++){
         tabla+= "<tr><td>"+arr[i]+"</td></tr>"
     }

     tabla+="</table>"
       
     $('#tabla').html(tabla)
 }
