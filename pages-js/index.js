//debugger

//const url = './data.json';
/* --//no lo pude utilizar pese a seguir los pasos 
fetch('data.json')
    .then(resp => resp.json())
    .then(data => console.log(data))

//como me daba error segun lei podia montar un http-server 

//const url = "http://127.0.0.1:8080/data.json";

Starting up http-server, serving ./

http-server version: 14.1.1

http-server settings: 
CORS: disabled
Cache: 3600 seconds
Connection Timeout: 120 seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: false
Serve Brotli Files: false
Default File Extension: none

Available on:
  http://192.168.1.7:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server

[2023-10-17T23:26:41.261Z]  "GET /" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36"
(node:9656) [DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated
(Use `node --trace-deprecation ...` to show where the warning was created)
[2023-10-17T23:26:41.752Z]  "GET /favicon.ico" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36"
[2023-10-17T23:26:41.754Z]  "GET /favicon.ico" Error (404): "Not found"
http-server stopped.

SEGUIA TIRANDO ERROR

Access to fetch at 'file:///c%3A/Users/black/OneDrive/Escritorio/Entrega%20-%20final%20-%20Sciarretta%20-%20copia/test-zone/data.json' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.
index.js:8
        
       GET file:///c%3A/Users/black/OneDrive/Escritorio/Entrega%20-%20final%20-%20Sciarretta%20-%20copia/test-zone/data.json net::ERR_FAILED
(anónimo) @ index.js:8
index.js:8
        
       Uncaught (in promise) TypeError: Failed to fetch
    at index.js:8:1

*/

// Evento que se dispara cuando se carga la pagina
document.addEventListener("DOMContentLoaded", function() {

    generadorContenedorPrincipal()

})


//funcion para generar contenedor principal de ingreso
function  generadorContenedorPrincipal (){
    
    //contenedor de la plantilla de ingreso
    const contenedor_central_log = document.createElement("div");
    contenedor_central_log.classList.add("contenedor_central_log");
    contenedor_central_log.id = "contenedor_central_log";
    
    //titulo de la plantilla
    const titulo = document.createElement("h1");
    titulo.textContent = "Inicio de Sesion";

    //label usuario
    const label_usuario = document.createElement("label");
    label_usuario.textContent = "Usuario";    

    //input de ingreso usuario
    const input_usuario = document.createElement("input");
    input_usuario.placeholder = "Ingrese su usuario";
    input_usuario.classList.add ("user");
    input_usuario.id = "user-inicio";  

    //label contraseña
    const label_contraseña = document.createElement("label");
    label_contraseña.textContent = "Contraseña";
    
    //input de ingreso contraseña
    const input_contraseña = document.createElement("input");
    input_contraseña.placeholder = "Ingrese su contraseña";
    input_contraseña.classList.add ("pass")
    input_contraseña.id = "pass-inicio"

    
    //contedor botones
    const ctnbtnIngreso = document.createElement("div");
    ctnbtnIngreso.classList.add("contenedor_secundario");

    //boton de ingreso
    const btn_ingreso = document.createElement("button");
    btn_ingreso.textContent = "Ingresar";
    btn_ingreso.classList.add("btn_ingreso");
    btn_ingreso.id = "btn_ingreso";

    btn_ingreso.addEventListener("click", () => {
    
        //se valida el usuario ingresado 
        if(validarUsuario()){
    
            //se vacia la pagina
            volverAceroLog();

            generadorMenu();
    
        }
        
    })

    //boton de nuevo registro
    const btn_nuevo_registro_usuario = document.createElement("button");
    btn_nuevo_registro_usuario.textContent = "Nuevo Usuario"
    btn_nuevo_registro_usuario.classList.add ("btn_ingreso");
    btn_nuevo_registro_usuario.id = "btn_nuevo_registro_usuario";


    //si tocan el boton nuevo registro
    btn_nuevo_registro_usuario.addEventListener("click", () => {
        
        volverAceroLog()

        generadorContenedorRegistro ();    
    
    })

    //agregando los distintos elementos creados

    //referencia al titulo
    contenedor_central_log.appendChild(titulo);

    //usuario
    contenedor_central_log.appendChild(label_usuario);
    contenedor_central_log.appendChild(input_usuario);
    
    //contraseña
    contenedor_central_log.appendChild(label_contraseña);
    contenedor_central_log.appendChild(input_contraseña);    

    contenedor_central_log.appendChild(ctnbtnIngreso);  
    //boton de ingreso
    ctnbtnIngreso.appendChild(btn_ingreso);

    //boton de nuevo registro
    ctnbtnIngreso.appendChild(btn_nuevo_registro_usuario);

    //el contenedor que guarda los elementos
    document.getElementById("registro-principal").appendChild(contenedor_central_log);

}


//funcion para que vacie la pagina principal
function volverAceroLog (){

    const contenedor = document.getElementById("registro-principal");
    contenedor.innerHTML = "";

}

/* VERSION B
//funcion para que me borre las tarjetas creadas -- sino cada vez que entraba y salia me las duplicaba
function volverAceroLog() {
    const tarjetas = document.querySelectorAll(".contenedor_central_log");
    tarjetas.forEach((tarjeta) => {
        tarjeta.remove();
    });
}
*/


//funcion para generara el contenedor secundario de ingreso - nuevo registro
function generadorContenedorRegistro () {

    //contenedor de la plantilla nuevo registro
    const contenedor_nuevo_registro = document.createElement("div");
    contenedor_nuevo_registro.classList.add("contenedor_central_log");
    contenedor_nuevo_registro.id = "contenedor_nuevo_registro";

    //titulo de la plantilla
    const titulo = document.createElement("h1");
    titulo.textContent = "Registro Nuevo Usuario";

    //label nuevo usuario
    const label_usuario = document.createElement("label");
    label_usuario.textContent = "Usuario";

    //input nuevo usuario
    const input_usuario = document.createElement("input");
    input_usuario.classList.add ("user-registro");
    input_usuario.placeholder = "Ingrese el Usuario";
    input_usuario.id = "user-registro";

    //label nueva contraseña
    const label_contraseña = document.createElement("label");
    label_contraseña.textContent = "Contraseña";

    //input nueva contraseña
    const input_contraseña = document.createElement("input");
    input_contraseña.classList.add ("pass-registro");
    input_contraseña.placeholder = "Ingrese Nueva Contraseña";
    input_contraseña.id ="pass-registro";

    //label nombre
    const label_nombre = document.createElement("label");
    label_nombre.textContent = "Nombre";

    //input nombre
    const input_nombre = document.createElement("input");
    input_nombre.classList.add ("nombre-registro");
    input_nombre.placeholder = "Ingrese su Nombre";
    input_nombre.id ="nombre-registro";

    //label apellido
    const label_apellido = document.createElement("label");
    label_apellido.textContent = "Apellido";

    //input apellido
    const input_apellido = document.createElement("input");
    input_apellido.classList.add ("apellido-registro");
    input_apellido.placeholder = "Ingrese su apellido";
    input_apellido.id ="apellido-registro";

    //contenedor para los botones
    const btn_Container_registro = document.createElement("div");
    btn_Container_registro.classList.add("btn_Container_registro");

    //boton de arrepentimiento
    const btn_arrepentimiento = document.createElement("button");
    btn_arrepentimiento.textContent = "Volver"
    btn_arrepentimiento.classList.add ("button-registro");
    btn_arrepentimiento.id = "btn_arrepentimiento";
    
    btn_arrepentimiento.addEventListener("click", () => {

        volverAceroLog()

        avisos = "";
    
        generadorContenedorPrincipal()

    });
    
    //bonton de registro
    const btn_registrar = document.createElement("button");
    btn_registrar.textContent = "Registrar"
    btn_registrar.classList.add ("button-registro");
    btn_registrar.id = "btn_registrar";

    //agregados al contenedor
    btn_registrar.addEventListener("click", () => {
    
        //se valida el usuario ingresado 
        if(validacionRegistro()){

            Swal.fire({

                title: 'Verificacion',
                text: "esta seguro de los datos ingresados?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, resgistrar!'
                }).then((result) => {

                    if (result.isConfirmed) {
                        nuevoRegistro()
                        //se vacia la pagina
            
                        volverAceroLog();
                        Swal.fire({
                            
                            icon: 'success',
                            title: '¡Usuario Registrado con Éxito!',
                            text: `Bienvenido, ${usuario_operando.nombre} ${usuario_operando.apellido}`,
                            showConfirmButton: false,
                            timer: 1500,
                            footer: '<h5>Drothar-Team<h5>'
                            
                        })

                        generadorMenu()
            }})
    
        }
        
    })

    //referencia al titulo
    contenedor_nuevo_registro.appendChild(titulo);

    //usuario
    contenedor_nuevo_registro.appendChild(label_usuario);
    contenedor_nuevo_registro.appendChild(input_usuario);
    
    //contraseña
    contenedor_nuevo_registro.appendChild(label_contraseña);
    contenedor_nuevo_registro.appendChild(input_contraseña);

    //nombre
    contenedor_nuevo_registro.appendChild(label_nombre);
    contenedor_nuevo_registro.appendChild(input_nombre);

    //apellido
    contenedor_nuevo_registro.appendChild(label_apellido);
    contenedor_nuevo_registro.appendChild(input_apellido);

    //contenedor botones
    contenedor_nuevo_registro.appendChild(btn_Container_registro);

    //boton de registro
    btn_Container_registro.appendChild(btn_registrar);

    //boton de volver
    btn_Container_registro.appendChild(btn_arrepentimiento);


    document.getElementById("registro-principal").appendChild(contenedor_nuevo_registro);
    document.getElementById("contenedor_nuevo_registro").appendChild(btn_Container_registro);

}




//div

//principal de ingreso
const logPrincipal = document.getElementById("contenedor_central_log")

//registro de nuevo usuario
const registroNuevoUsuario = document.getElementById("contenedor_nuevo_registro")






























/*
//si tocan el boton de ingreso 
btnIngresar.addEventListener("click", () => {
    
    //se valida el usuario ingresado 
    if(validarUsuario()){

        //se vacia la pagina
        volverAceroLog();

    }
    
})
*/
/*
//si tocan el boton nuevo registro
btn_nuevo_registro_usuario.addEventListener("click", () => {
    
    
    volverAceroLog()

    generadorContenedorRegistro ();

    
    
})
*/
/*
//si tocan el boton nuevo registro
btn_nuevo_registro_usuario.addEventListener("click", () => {
    
    logPrincipal.style.display = "none"
    

    generadorContenedorRegistro ();

    
    
})
*/

/*ERROR A SOLUCIONAR
btnArrepentimiento.addEventListener("click", () => {
    

    
    volverAceroLog()
    
    generadorContenedorPrincipal()
           
    
});
*/
/*
btnArrepentimiento.addEventListener("click", () => {
    

    registroNuevoUsuario.display = "none"
    logPrincipal.style.display = "block"
           
    
});
*/