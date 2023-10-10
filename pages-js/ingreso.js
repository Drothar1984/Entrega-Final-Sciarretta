

//variable donde se va a guardar el usuario que esta operando
let usuario_operando = new Array();

//aviso de faltantes de datos al momento de registrarse 
let avisos = document.getElementById("avisos");

//aviso de faltantes de datos al momento de realizar una denuncia 
let avisos_denuncia = document.getElementById("avisos-denuncia");


//REFERENCIA A LOS BOTONES

//pagina de logg

//ingreso con usuario existente
const btnIngresar = document.getElementById("btn_ingresar");
//ingreso con usuario nuevo a plantilla nuevo usuario
const btnNuevoUsuario = document.getElementById("btn_nuevo_usuario");
//registro de nuevo usuario
const btnRegistrar = document.getElementById("btn_registrar");
// volver a la pagina de ingreso principal
const btnVolverInicio = document.getElementById("btn_volver_inicio"); 


//sector de menu 

//para acceder a la plantilla de denuncias
const btnDenuncia = document.getElementById("btn_denuncia")
//para acceder a la plantilla de los bancos
const btnBancos = document.getElementById("btn_bancos");
//para acceder a la plantilla de estadisticas
const btnEstadistica = document.getElementById("btn_estadisticas");

//sector entidades


//para agregar una entidad nueva
const btnAgregarEntidad = document.getElementById("nuevaEntidad");
//para buscar una entidad en particular
const btnBusquedaEntidades = document.getElementById("btn_buscar");
//para volver al sector menu 
const btnVolverInicio2 = document.getElementById("btn_volver_inicio2");

//sector de denuncias 
 
//nueva denuncia principal
const btnNuevaDenuncia = document.getElementById("btn_nueva_denuncia");
//para volver al sector menu 
const btnVolverInicio4 = document.getElementById("btn_volver_inicio4");

//sector estadisticas
//para buscar en estadisticas un delito --- PROXIMAMENTE MEJORADO
const btnBusquedaDelitos = document.getElementById("btn_buscar_delito");
//para volver al sector menu 
const btnVolverInicio3 = document.getElementById("btn_volver_inicio3");


//REFERENIA A LOS ELEMENTOS DIV

//contenedor principal de logg
const divcontenedorcentral = document.getElementById("contenedor-central");

//contenedor de usuario ya registrado
const divFormularioLog = document.getElementById("div-formulario-log");

//contenedor de nuevo registro
const formNuevoUsuario = document.getElementById("div-formulario-registro");

//contenedor sector denuncias
const divFormularioRegistro = document.getElementById("div-formulario-denuncia");

//contenedor sector general entidades
const divEntidadesCentral = document.getElementById("entidades-central");

//contenedor exclusivo para las entidades
const divContenedorEntidades = document.getElementById("entidades-container");

//contenedor sector estadistica de delitos
const divContenedorDelitos = document.getElementById("delitos-container");

//contenedor sector delitos
const divContainerEstadistica = document.getElementById("delitos-container")





//boton de ingreso
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
    divContenedorEntidades.style.display = "none";
    divFormularioRegistro.style.display = "none";

})


btnVolverInicio3.addEventListener("click",  () => {

    divEntidadesCentral.style.display = "block";
   
    divFormularioRegistro.style.display = "none";    
    divContainerEstadistica.style.display = "none";
    formNuevoUsuario.style.display = "none";
    divContenedorEntidades.style.display = "none";
    divFormularioRegistro.style.display = "none";

})
    
btnVolverInicio4.addEventListener("click",  () => {

    divEntidadesCentral.style.display = "block";
   
    divFormularioRegistro.style.display = "none";    
    divContainerEstadistica.style.display = "none";
    formNuevoUsuario.style.display = "none";
    divContenedorEntidades.style.display = "none";
    divFormularioRegistro.style.display = "none";

})

/*
btnBuscarEntidad.addEventListener("click", function () {

    const textoBusqueda = document.getElementById("buscar-entidad").value;

    if(textoBusqueda != ""){

        const resultadoB = coleccion_bancos.find((el) => el.nombre == textoBusqueda)

        generarTarjetasEntidades(resultadoB)

    }
    
    


    console.log("Búsqueda de entidad:", textoBusqueda);

});*/

