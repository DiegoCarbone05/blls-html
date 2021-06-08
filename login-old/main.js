/// <reference path="../../../../node_modules/@types/jquery/index.d.ts">
function Login(event) {
    event.preventDefault();
    var email = jQuery("#email").val();
    var clave = jQuery("#clave").val();
    if (email == "asd@asd.com" && clave == "123") {
        jQuery("#alerta").removeClass("hide");
        jQuery("#alerta").text("Logeado");
    }
    else {
        jQuery("#modalBtn").trigger("click");
        console.log("cresenciales incorectas pete");
    }
    jQuery("#formulario").on("submit", function () { });
}
