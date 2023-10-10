//localStorage.clear();

let usuario_operando = new Array();

let avisos = document.getElementById("avisos");



const key_coleccion_datos = "datos";

// Obtener referencias a los botones
const btnIngresar = document.getElementById("btn_ingresar");

const btnNuevoUsuario = document.getElementById("btn_nuevo_usuario");
const formNuevoUsuario = document.getElementById("div-formulario-registro");


const btnRegistrar = document.getElementById("btn_registrar");
const btnVolverInicio = document.getElementById("btn_volver_inicio"); 
const btnVolverInicio2 = document.getElementById("btn_volver_inicio2"); 

 

const btnDenuncia = document.getElementById("btn_denuncia")

const btnBancos = document.getElementById("btn_bancos");
const btnAgregarEntidad = document.getElementById("nuevaEntidad");
const btnBusquedaEntidades = document.getElementById("btn_buscar");
const btnEstadistica = document.getElementById("btn_estadisticas")


// Obtener referencias a los elementos div

const divcontenedorcentral = document.getElementById("contenedor-central")
const divFormularioLog = document.getElementById("div-formulario-log");
const divFormularioRegistro = document.getElementById("div-formulario-denuncia");
const divEntidadesCentral = document.getElementById("entidades-central")

const divContenedorDelitos = document.getElementById("delitos-container")
const divContenedorEntidades = document.getElementById("entidades-container")
const btnNuevaDenuncia = document.getElementById("btn_nueva_denuncia")
const divContainerEstadistica = document.getElementById("delitos-container")


btnIngresar.addEventListener("click", () => {
    if (validarUsuario()) {
     
        
    }
});





btnNuevoUsuario.addEventListener("click", function () {
    
    divFormularioLog.style.display = "none";    
    
    formNuevoUsuario.style.display = "block";
})

btnRegistrar.addEventListener("click", function () {
    
    if (validacionRegistro()){

        
        nuevoRegistro();
        divFormularioRegistro.style.display = "none";
        divEntidadesCentral.style.display = "block";
        
            
    
    }  
        
});

btnVolverInicio.addEventListener("click",  () => {

    
    divFormularioLog.style.display = "block";
    
    
    formNuevoUsuario.style.display = "none";

})

btnBancos.addEventListener("click", function () {
    
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


btnVolverInicio2.addEventListener("click",  () => {

    
    divEntidadesCentral.style.display = "block";

    divFormularioRegistro.style.display = "none";    
    divContainerEstadistica.style.display = "none";
    formNuevoUsuario.style.display = "none";

})
