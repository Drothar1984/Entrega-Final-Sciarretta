//variable que arranca vacia y solo va a alojar el valor que devuelva al registrarse un usario
let usuario_operando = "";
const key_coleccion_datos = "datos";

let usuarios = JSON.parse(localStorage.getItem(key_coleccion_datos)) || [
    { user: "santiago", pass: "000001", nombre: "Santiago", apellido: "Sciarretta", tipo: "Admin" },
    { user: "nicolas", pass: "000002", nombre: "Nicolas", apellido: "Martini", tipo: "Admin" },
    { user: "Tutor", pass: "000003", nombre: "Tutor", apellido: "Corrector", tipo: "Admin" },
    { user: "visita", pass: "000004", nombre: "visita", apellido: "anonimo", tipo: "Regular" },
];



//clase constructora de usuario
class Usuario {

    constructor(usuario,contraseña,nombre,apellido){

        this.usuario = usuario;
        this.pass = contraseña;
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipo = "Regular"; 

    }

    static getInstance (u){

        return new Usuario (u.usuario, u.contraseña, u.nombre, u.apellido);

    }

    getTipo(){

        return this.tipo;

    }

}




//funcion validadora
function validarUsuario (){

    usuario_operando = "";

    //valores tomados por los input
    const usuario = document.getElementById("user-inicio").value;
    const contraseña = document.getElementById("pass-inicio").value;

    //
    const usuarioEncontrado = usuarios.find ((u) => u.user === usuario && u.pass === contraseña);

    if(usuarioEncontrado){

        Swal.fire({
            
            icon: 'success',
            title: '¡Validacion Exitosa!',
            text: `Bienvenido nuevamente, ${usuarioEncontrado.nombre} ${usuarioEncontrado.apellido}`,
            showConfirmButton: false,
            timer: 1500,
            footer: '<h5>Drothar-Team<h5>'
        })        

        usuario_operando = usuarioEncontrado;
        return true;

    }else{

        Swal.fire({
            icon: 'error',
            title: 'Error de ingreso',
            text: 'Usuario o contraseña incorrectos',
            text: 'Por favor, intentelo nuevamente!',
            footer: '<h5>Drothar-Team<h5>'
          })
        
        return false;
    }
}


//funcion validacion de registro

function validacionRegistro() {

    avisos.innerHTML = "";
    
    let nuevoUsuario = document.getElementById("user-registro").value;
    let nuevaContraseña = document.getElementById("pass-registro").value;
    let nuevoNombre = document.getElementById("nombre-registro").value;
    let nuevoApellido = document.getElementById("apellido-registro").value;
    
    let arreglo_mensajes = [];

    if (nuevoUsuario === "" || nuevoUsuario === null) {
        arreglo_mensajes.push("Ingrese usuario");
    }

    if (nuevaContraseña === "" || nuevaContraseña === null) {
        arreglo_mensajes.push("contraseña requerida");
    }

    if (nuevoNombre === "" || nuevoNombre === null) {
        arreglo_mensajes.push("y el nombre campeon?");
    }

    if (nuevoApellido === "" || nuevoApellido === null) {
        arreglo_mensajes.push("me lleve la chingada!!!");
    }

    if(usuarios.find((nombre) => nombre.usuario === nuevoUsuario)){
        arreglo_mensajes.push("Usuario ya registrado!!!");

    }


    //si el arreglo en mayor a 0
    if (arreglo_mensajes.length > 0) {
        //crear una lista (ul) para guardar los mensajes de error
        let ul = document.createElement("ul");        
        //a la varriable . se la recorre (elementos - mensaje)
        arreglo_mensajes.forEach((mensaje) => {
            //crear un elemento de tipo lista (li) para cada mensaje de error
            let li = document.createElement("li");
            //modificion tipo contendido texto de li = mensajes
            li.textContent = mensaje;
            //a la ul.se la agrega los li creados
            ul.appendChild(li);
        });

        //mostrar la alerta de SweetAlert2 con la lista de errores
        Swal.fire({
            icon: 'error',
            title: 'No es posible registrar el usuario',
            html: ul.outerHTML, //utiliza la lista (ul) como contenido HTML
            footer: '<h5>Drothar-Team<h5>'
        });

        return false;
    }

    const nuevoUsuarioAgregar = {
        user: nuevoUsuario,
        pass: nuevaContraseña,
        nombre: nuevoNombre,
        apellido: nuevoApellido,
        tipo: "Regular"
    };

    usuarios.push(nuevoUsuarioAgregar);
    usuario_operando = nuevoUsuarioAgregar;

    localStorage.setItem(key_coleccion_datos, JSON.stringify(usuarios));    
    
    return true;
   
}




function  crear_li (mensaje){
    
    let li = document.createElement("li");
    
    li.textContent = mensaje;
    
    return li;
 }


function nuevoRegistro(){

    
    let usuario = document.getElementById("user-registro").value;
    let pass = document.getElementById("pass-registro").value;
    let nombre = document.getElementById("nombre-registro").value;
    let apellido = document.getElementById("apellido-registro").value;    

    let user = new Usuario(usuario, pass, nombre, apellido);

    usuarios.push(user);

    localStorage.setItem(key_coleccion_datos,JSON.stringify(usuarios));


    

}