/*
//funcion para mostrar un elemento en especial
function mostrar(elementId) {
    const elemento = document.getElementById(elementId);
    if (elemento) {
        elemento.style.display = "block";
    }
}


//funcion para ocultar un elemento en especial
function ocultar(elementId) {
    const elemento = document.getElementById(elementId);
    if (elemento) {
        elemento.style.display = "none";
    }
}






btnBancos.addEventListener("click", function () {
    
    ocultar("contenedor-central");
    mostrar("entidades-central")
    divEntidadesCentral.style.display = "none"
    divContenedorEntidades.style.display = "block"
    generarTarjetasEntidades()

})


btnAgregarEntidad.addEventListener("click", function () {

    agregarNuevaEntidad()

})


btnDenuncia.addEventListener("click", function () {
    
    divEntidadesCentral.style.display = "none"
    divFormularioRegistro.style.display = "block"
    

})


btnNuevaDenuncia.addEventListener("click", function () {
    nuevaDenuncia();
});

btnEstadistica.addEventListener("click", function (){

    divEntidadesCentral.style.display = "none"
    divContainerEstadistica.style.display = "block"
    generarTarjetasDelitos()

})


btnVolverInicio2.addEventListener("click",  function () {

    
    divFormularioLog.style.display = "none";
    formNuevoUsuario.style.display = "none";
    divEntidadesCentral.style.display = "none";
    divContenedorEntidades.style.display = "none";
    divContainerEstadistica.style.display = "none";
    
    
    divcontenedorcentral.style.display = "block";

})
*/