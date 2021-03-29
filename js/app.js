$(document).ready(function () {

    let porcentaje = '30%'
    let promocion = 'pizzas'
    const txtPromo = `Esta semana promo de ${promocion} con un ${porcentaje} de descuento`
    let topPromo = $('#top')
    let retenerCliente = $('#retencion')
    let mostrarPromocion = $('#promocion')
    let promocionSemana = $('#promoSemana')
    let textPromo = $('#txt-promo')
    let cupon = $('#cupon')
    let modalForm = $('#modal')
    let modalConfirmacion = $('#modal-menu')
    let btnReservar = $('#btn')
    let btnSubmit = $('#submit')
    let btnMoonTheme = $('#to-moon')
    let btnLightTheme = $("#to-light")
    let formulario = $('#form')
    let calendario = $('#calendar')




    $('#retencion').hide()

    let cont = 0
    topPromo.mouseleave(function () {
        cont++

        if (cont < 2) {
            retenerCliente.modal().css("height", "auto")
            mostrarPromocion.show()

            promocionSemana.show().fadeIn(), 10000

            textPromo.append(txtPromo)

            cupon.click(function () {
                textPromo.html('<p>Tu código de descuento es: pizzaNanna</p>')
                cupon.hide()
            })
        }

    })



    /**MODAL */

    modal()

    function modal() {
        modalForm.css("height", "auto")

        btnReservar.click(function () {
            modalForm.modal()
        })
        modalForm.css("height", "auto")


    }
    // /**FORMULARIO*/


    formulario.submit(function (e) {
        e.preventDefault()

        let nombre = $('#nombre').val()
        let apellido = $('#apellido').val()
        let email = $('#email').val()
        let telefono = $('#telefono').val()

        let reserva = [nombre, apellido, email, telefono]


        if (reserva.length < 10) {
            reserva.push(calendario.val())

        } else {
            alert("El local se encuentra lleno")
        }

        reserva.push($('option:selected').val())

       
        modalConfirmacion.modal()
        suReserva()


      $( "input[id ='btn']" ).prop( "disabled" , true ).val('Reservado');
      $("input[id ='btn']:disabled").css('background', 'rgb(124, 124, 124)')

    })




    function suReserva() {

        modalConfirmacion.append(`<p>Ya se reservó tu mesa ${$(nombre).val()} ${$(apellido).val()}!</p>`)


    }


    /** CALENDAR */


    calendario.datetimepicker({
        inline: false,
    });

    calendario.css('width', 'auto')


    //Selector Theme
    const btnSelector = $('#theme-selector')

    let theme = $('#theme')
    let darkMode;

    btnSelector.click(function () {
        btnMoonTheme.click(function () {
            darkMode = 'true'
            localStorage.setItem('darkMode', darkMode)
            theme.attr('href', 'css/moon.css')
            modeMoonMouse()
        })

        btnLightTheme.click(function () {

            darkMode = 'false'
            localStorage.setItem('darkMode', darkMode)
            theme.attr('href', 'css/light.css')
            modeLightMouse()

        })
    })

    if (localStorage.getItem('darkMode') == 'true') {
        theme.attr('href', 'css/moon.css')
        modeMoonMouse()
    } else {
        theme.attr('href', 'css/light.css')
        modeLightMouse()
    }

    function modeMoonMouse() {
        btnMoonTheme.hover(mouseOverMoon, mouseOutMoon)

        function mouseOverMoon() {
            $(this).css({
                'background': '#fff',
                'color': '#000'
            })
        }

        function mouseOutMoon() {
            $(this).css({
                'background': '#000',
                'color': '#fff'
            })
        }

        btnLightTheme.hover(mouseOver, mouseOut)

        function mouseOver() {
            $(this).css({
                'background': '#fff',
                'color': '#000'
            })
        }

        function mouseOut() {
            $(this).css({
                'background': '#000',
                'color': '#fff'
            })
        }
    }


    function modeLightMouse() {
        btnLightTheme.hover(mouseOver, mouseOut)

        function mouseOver() {
            $(this).css({
                'background': '#000',
                'color': '#fff'
            })
        }

        function mouseOut() {
            $(this).css({
                'background': '#fff',
                'color': '#000'
            })
        }

        btnMoonTheme.hover(mouseOverMoon, mouseOutMoon)

        function mouseOverMoon() {
            $(this).css({
                'background': '#000',
                'color': '#fff'
            })
        }


        function mouseOutMoon() {
            $(this).css({
                'background': '#fff',
                'color': '#000'
            })
        }
    }


    /*********** AJAX */


    $('#precioMenu').on('click', function () {
        $.ajax({
                url: './menu.json',
                type: 'GET',
                datatype: "json"
            })
            .done(function (request) {
                $('.titulo').html('<span>*Los valores no incluyen promociones</span>')

                let tabla = ""

                $('#precio-empanadas').click(function () {

                    $(this).addClass('activado').siblings().removeClass('activado')

                    tabla += "<table class='table table-striped justify-content-center'>"
                    tabla += "<tr><th>Id</th><th>Empanadas</th><th>Precio</th></tr>"
                    for (let i = 0; i < request.empanadas.length; i++) {
                        tabla += "<tr><td>#" + [i + 1] + "</td><td>" + request.empanadas[i].nombre + "</td>" +
                            "<td>$ " + request.empanadas[i].precio + ".-</td></tr>"
                    }

                    tabla += "</table>"

                    $('#tabla').html(tabla).scroll()
                })



                $('#precio-pizzas').click(function () {


                    $(this).addClass('activado').siblings().removeClass('activado')

                    tabla += "<table class='table table-striped'>"
                    tabla += "<tr><th>Id</th><th>Pizzas</th><th>Precio</th></tr>"
                    for (let i = 0; i < request.pizzas.length; i++) {
                        tabla += "<tr><td>#" + [i + 1] + "</td><td>" + request.pizzas[i].nombre + "</td>" +
                            "<td>$ " + request.pizzas[i].precio + ".-</td></tr>"
                    }

                    tabla += "</table>"

                    $('#tabla').html(tabla).scroll()
                })

                $('#precio-sandwich').click(function () {

                    $(this).addClass('activado').siblings().removeClass('activado')

                    tabla += "<table class='table table-striped justify-content-center'>"
                    tabla += "<tr><th>Id</th><th>Sandwich</th><th>Precio</th></tr>"
                    for (let i = 0; i < request.sandwich.length; i++) {
                        tabla += "<tr><td>#" + [i + 1] + "</td><td>" + request.sandwich[i].nombre + "</td>" +
                            "<td>$ " + request.sandwich[i].precio + ".-</td></tr>"
                    }

                    tabla += "</table>"

                    $('#tabla').html(tabla).scroll()
                })

            })
            .fail(function (xhr, status, error) {
                console.log(xhr)
                console.log(status)
                console.log(error)
            })
    })


})