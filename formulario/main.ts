var numero = 0;

function sumar() {

    if(numero < 20){
        
        numero = numero + 1;
        cambiarNumero();

    }


}



function restar() {
    if (numero > 0) {

        numero = numero - 1;
        cambiarNumero();

    }

}





function cambiarNumero() {

    document.getElementById("lblNumero").innerHTML = numero.toString();

    if (numero <= 0){
        var btnVer = document.querySelector('#ver');
        btnVer.setAttribute("disabled","disabled");

    }
    else
    {
        var btnVer = document.querySelector('#ver');
        btnVer.removeAttribute("disabled");
    }

}

function Ir(url:string){

    location.href=url;


} 

function activacionBtn(){

    

}

function btnVer(url:string){

    location.href=url;

}


