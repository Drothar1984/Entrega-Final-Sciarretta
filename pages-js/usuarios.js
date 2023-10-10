const key_coleccion_datos = "datos"; 

let usuarios = JSON.parse(localStorage.getItem(key_coleccion_datos)) || [
    { user: "santiago", pass: "000001", nombre: "Santiago", apellido: "Sciarretta", tipo: "Admin" },
    { user: "nicolas", pass: "000002", nombre: "Nicolas", apellido: "Martini", tipo: "Admin" },
    { user: "Tutor", pass: "000003", nombre: "Tutor", apellido: "Corrector", tipo: "Admin" },
    { user: "visita", pass: "000004", nombre: "visita", apellido: "anonimo", tipo: "Regular" },
];


class Usuario {
    
    constructor(usuario, contraseña, nombre, apellido) {

        this.usuario = usuario;
        this.pass = contraseña;
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipo = "Regular"; 
    }
    
    static getInstance(u){
        return new Usuario(u.usuario, u.contraseña, u.nombre, u.apellido);
    }    

    getTipo(){

        return this.tipo;

    }
}


function validarUsuario() {
    
    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;
    
    const usuarioEncontrado = usuarios.find((u) => u.user === usuario && u.pass === contraseña);

    if (usuarioEncontrado) {
        
        alert(`Bienvenido nuevamente, ${usuarioEncontrado.nombre} ${usuarioEncontrado.apellido} (${usuarioEncontrado.tipo})`);
        usuario_operando.push(usuarioEncontrado);

        divcontenedorcentral.style.display = "none";
        divEntidadesCentral.style.display = "block";
    
    } else {
        
        alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }

}


function validacionRegistro() {

    avisos.innerHTML = "";

    
    let nuevoUsuario = document.getElementById("nuevo_usuario").value;
    let nuevaContraseña = document.getElementById("nuevo_contraseña").value;
    let nuevoNombre = document.getElementById("nuevo_nombre").value;
    let nuevoApellido = document.getElementById("nuevo_apellido").value;
    
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

    if (arreglo_mensajes.length > 0) {

        let lista = document.createElement("ul");
        lista.textContent = "No es posible registrar el usuario: ";

        arreglo_mensajes.forEach(element => {
            lista.appendChild(crear_li(element));
        });

        avisos.appendChild(lista);

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
    usuario_operando.push(nuevoUsuarioAgregar);

    localStorage.setItem(key_coleccion_datos, JSON.stringify(usuarios));

    alert("Se ha registrado con éxito.\n¡Bienvenido " + nuevoUsuarioAgregar.nombre + "!");
    
    return true;
   
}


 
function  crear_li (mensaje){
    
    let li = document.createElement("li");
    
    li.textContent = mensaje;
    
    return li;
 }

function nuevoRegistro(){

    
    let usuario = document.getElementById("nuevo_usuario").value;
    let pass = document.getElementById("nuevo_contraseña").value;
    let nombre = document.getElementById("nuevo_nombre").value;
    let apellido = document.getElementById("nuevo_apellido").value;    

    let user = new Usuario(usuario, pass, nombre, apellido);

    usuarios.push(user);

    localStorage.setItem(key_coleccion_datos,JSON.stringify(usuarios));
    divcontenedorcentral.style.display = "none";



}