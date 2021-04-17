var numero = 0;
function sumar() {
    if (numero < 20) {
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
}
function Ir(url) {
    location.href = url;
}
function activacionBtn() {
}
function btnVer(url) {
    location.href = url;
}
