const key_coleccion_datos = "datos";
let usuarios = JSON.parse(localStorage.getItem(key_coleccion_datos)) || [
    { user: "santiago", pass: "000001", nombre: "Santiago", apellido: "Sciarretta", tipo: "Admin" },
    { user: "nicolas", pass: "000002", nombre: "Nicolas", apellido: "Martini", tipo: "Admin" },
    { user: "Tutor", pass: "000003", nombre: "Tutor", apellido: "Corrector", tipo: "Admin" },
    { user: "visita", pass: "000004", nombre: "visita", apellido: "anonimo", tipo: "Regular" },
];

document.addEventListener("DOMContentLoaded", function() {
    
});

let usuario_operando = "";

class Usuario {

    constructor(usuario,constraseña,nombre,apellido){

        this.usuario = usuario;
        this.pass = contraseña;
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipo = "Regular"; 

    }

    static getInstance (u){

        return new Usuario (u.usuario, u.constraseña, u.nombre, u.apellido
            )
    }

    
}

//funcion para generar contenedor principal de ingreso
function  generadorContenedorPrincipal (){
    
    //contenedor de la plantilla de ingreso
    const contenedor_central_log = document.createElement("div");
    contenedor_central_log.classList.add("contenedor_central_log");
    
    //titulo de la plantilla
    const titulo = document.createElement("h2");
    titulo.textContent = "Entidades Bancarias";

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

    //boton de ingreso
    const btn_ingreso = document.createElement("button");
    btn_ingreso.textContent = "Ingresar";
    btn_ingreso.classList.add("btn_ingreso");
    btn_ingreso.id = "btn_ingreso";

    //boton de nuevo registro
    const btn_nuevo_registro_usuario = document.createElement("button");
    btn_nuevo_registro_usuario.textContent = "Nuevo Usuario"
    btn_nuevo_registro_usuario.classList.add ("btn_nuevo_registro_usuario");
    btn_nuevo_registro_usuario.id = "btn_nuevo_registro_usuario";

    //agregando los distintos elementos creados

    //referencia al titulo
    contenedor_central_log.appendChild(titulo);

    //label
    contenedor_central_log.appendChild(label_usuario);
    contenedor_central_log.appendChild(input_usuario);
    
    //input
    contenedor_central_log.appendChild(label_contraseña);
    contenedor_central_log.appendChild(input_contraseña);    

    //boton de ingreso
    contenedor_central_log.appendChild(btn_ingreso);

    //boton de nuevo registro
    contenedor_central_log.appendChild(btn_nuevo_registro_usuario);

    //el contenedor que guarda los elementos
    document.getElementById("registro-principal").appendChild(contenedor_central_log);

}

function volverAceroLog (){

    const contenedor = document.getElementById("div-formulario-registro");
    contenedor.innerHTML = "";

}

generadorContenedorPrincipal()


//funcion validadora
function validarUsuario (){

    usuario_operando = "";

    //valores tomados por los input
    const usuario = document.getElementById("user-inicio").value;
    const constraseña = document.getElementById("pass-inicio").value;

    //
    const usuarioEncontrado = usuarios.find ((u) => u.user === usuario && u.pass === constraseña);

    if(usuarioEncontrado){

        alert (`Bienvenido Nuevamente,  ${usuarioEncontrado.nombre} ${usuarioEncontrado.apellido}`);

        usuario_operando = usuarioEncontrado;
        return true;

    }else{

        alert("Usuario o contraseña incorrectos. Por favor, intentelo nuevamente");
        return false;
    }
}




//

const btnIngresar = document.getElementById("btn_ingreso");



btnIngresar.addEventListener("click", () => {
    
    if(validarUsuario()){

        volverAceroLog();


    }
    
})

