'use strict'

function respuesta_evento(){

    let nodoEntradaPrecio = document.querySelectorAll('#entradaPrecio');
    console.log(nodoEntradaPrecio);
    let nodoIva = document.querySelectorAll('.iva');
    console.log(nodoIva);
    let nodoEnvio = document.querySelectorAll('.envio');
    console.log(nodoEnvio);
    let nodoTotal = document.querySelectorAll('.total');
    console.log(nodoTotal);
    let nodoFinal = document.querySelector('.cifra');
    console.log(nodoFinal);

    let valorEntrada0 = Number(nodoEntradaPrecio[0].value);
    console.log( valorEntrada0 );
    let valorEntrada1 = Number(nodoEntradaPrecio[1].value);
    console.log( valorEntrada1 );
    let valorEntrada2 = Number(nodoEntradaPrecio[2].value);
    console.log( valorEntrada2 );
    let valorEntrada3 = Number(nodoEntradaPrecio[3].value);
    console.log( valorEntrada3 );
    
    let mensaje = "";

    let iva0 = (valorEntrada0 * 21) / 100;
    console.log( iva0 +' €' );
    mensaje = iva0 + " €";
    nodoIva[0].innerHTML = "<p>" + mensaje + "</p>";
    let iva1 = (valorEntrada1 * 21) / 100;
    console.log( iva1 +' €' );
    mensaje = iva1 + " €";
    nodoIva[1].innerHTML = "<p>" + mensaje + "</p>";
    let iva2 = (valorEntrada2 * 21) / 100;
    console.log( iva2 +' €' );
    mensaje = iva2 + " €";
    nodoIva[2].innerHTML = "<p>" + mensaje + "</p>";
    let iva3 = (valorEntrada3 * 21) / 100;
    console.log( iva3 +' €' );
    mensaje = iva3 + " €";
    nodoIva[3].innerHTML = "<p>" + mensaje + "</p>";

    let envio0 = 0;
    console.log( envio0 +' €' );
    mensaje = envio0 + " €";
    nodoEnvio[0].innerHTML = "<p>" + mensaje + "</p>";
    let envio1 = 0;
    console.log( envio1 +' €' );
    mensaje = envio1 + " €";
    nodoEnvio[1].innerHTML = "<p>" + mensaje + "</p>";
    let envio2 = 0;
    console.log( envio2 +' €' );
    mensaje = envio2 + " €";
    nodoEnvio[2].innerHTML = "<p>" + mensaje + "</p>";
    let envio3 = 0;
    console.log( envio3 +' €' );
    mensaje = envio3 + " €";
    nodoEnvio[3].innerHTML = "<p>" + mensaje + "</p>";

    if( valorEntrada0 < 50){
        envio0 = 10;
        console.log(envio0 + '€');
        mensaje = envio0 + " €";
        let nodoEnvio = document.querySelectorAll('.envio');
        nodoEnvio[0].innerHTML = "<p>" + mensaje + "</p>";
    }
    if( valorEntrada1 < 50){
        envio1 = 10;
        console.log(envio1 + '€');
        mensaje = envio1 + " €";
        let nodoEnvio = document.querySelectorAll('.envio');
        nodoEnvio[1].innerHTML = "<p>" + mensaje + "</p>";
    }
    if( valorEntrada2 < 50){
        envio2 = 10;
        console.log(envio2 + '€');
        mensaje = envio2 + " €";
        let nodoEnvio = document.querySelectorAll('.envio');
        nodoEnvio[2].innerHTML = "<p>" + mensaje + "</p>";
    }
    if( valorEntrada3 < 50){
        envio3 = 10;
        console.log(envio3 + '€');
        mensaje = envio3 + " €";
        let nodoEnvio = document.querySelectorAll('.envio');
        nodoEnvio[3].innerHTML = "<p>" + mensaje + "</p>";
    }

    let total0 = valorEntrada0 + iva0 + envio0;
    total0 = total0.toFixed(2);
    console.log(total0 + '€');
    mensaje = total0 + " €";
    nodoTotal[0].innerHTML = "<p>" + mensaje + "</p>";
    let total1 = valorEntrada1 + iva1 + envio1;
    total1 = total1.toFixed(2);
    console.log(total1 + '€');
    mensaje = total1 + " €";
    nodoTotal[1].innerHTML = "<p>" + mensaje + "</p>";
    let total2 = valorEntrada2 + iva2 + envio2;
    total2 = total2.toFixed(2);
    console.log(total2 + '€');
    mensaje = total2 + " €";
    nodoTotal[2].innerHTML = "<p>" + mensaje + "</p>";
    let total3 = valorEntrada3 + iva3 + envio3;
    total3 = total3.toFixed(2);
    console.log(total3 + '€');
    mensaje = total3 + " €";
    nodoTotal[3].innerHTML = "<p>" + mensaje + "</p>";

    let final = Number(total0) + Number(total1) + Number(total2) + Number(total3);
    final = final.toFixed(2);
    console.log(final + '€');
    mensaje = final + " €";
    nodoFinal.innerHTML = "<p>" + mensaje + "</p>";
}