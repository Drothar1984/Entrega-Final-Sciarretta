const coleccion_bancos = "bancos"; 
//arreglo con objetos que contengan los distintos bancos registrados en el pais, pudiendose agregar nuevos, que deben ser a posteriori verificados
let entidades = JSON.parse(localStorage.getItem(coleccion_bancos)) || [
    {entidad: 1, nombre: "BANCO DE GALICIA Y BUENOS AIRES S.A.U.", direccion:"Tte. Gral. Juan Domingo Perón 407, C1038 CABA", telfono: "0810-444-6500", eventos: 0},
    {entidad: 2, nombre: "BANCO DE LA NACION ARGENTINA", direccion:"Bartolome Mitre 326, C1036 CABA", telfono: "4347-6000", eventos: 0},
    {entidad: 3, nombre: "BANCO DE LA PROVINCIA DE BUENOS AIRES", direccion:"Bartolomé Mitre 430, C1036 CABA", telfono: "0810-22-22776", eventos: 0},
    {entidad: 4, nombre: "BANCO CIUDAD", direccion:"Florida 302, C1313 CABA", telfono: "4329-8600", eventos: 0}
]


//funcion para generar tarjetas visuales de entidades bancarias
function generarTarjetasEntidades() {   

    volverAcero();

    //recorremos el arreglo de entidades
    entidades.forEach((entidad) => {
        const tarjeta = crearTarjetaEntidad(entidad);
        divContenedorEntidades.appendChild(tarjeta);
    });
}

//funcion para crear una tarjeta de entidad bancaria
function crearTarjetaEntidad(entidad) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("entidad-tarjeta");

    const nombre = document.createElement("h2");
    nombre.textContent = entidad.nombre;

    const direccion = document.createElement("p");
    direccion.textContent = `Dirección: ${entidad.direccion}`;

    const telefono = document.createElement("p");
    telefono.textContent = `Teléfono: ${entidad.telefono}`;

    const eventos = document.createElement("p");
    eventos.textContent = `Eventos: ${entidad.eventos}`;

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(direccion);
    tarjeta.appendChild(telefono);
    tarjeta.appendChild(eventos);

    return tarjeta;
}

//funcion para agregar una nueva entidad
function agregarNuevaEntidad() {
    const nombre = prompt("Ingrese el nombre de la nueva entidad:");
    const direccion = prompt("Ingrese la dirección:");
    const telefono = prompt("Ingrese el teléfono:");    
    
    if (nombre && direccion && telefono) {        
        
        const nuevaEntidad = {
            entidad: entidades.length + 1, 
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            eventos: 0,
        };
        
        alert("ENTIDAD AGREGADA CON EXITO!!!");

        entidades.push(nuevaEntidad);
        
        localStorage.setItem(coleccion_bancos, JSON.stringify(entidades));    
        
        const tarjeta = crearTarjetaEntidad(nuevaEntidad);
        divContenedorEntidades.appendChild(tarjeta);
    
    }else {
        alert("Por favor, ingrese todos los datos de la entidad bancaria.");
    }
}


//funcion para que me borre las tarjetas creadas -- sino cada vez que entraba y salia me las duplicaba
function volverAcero() {
    const tarjetas = document.querySelectorAll(".entidad-tarjeta");
    tarjetas.forEach((tarjeta) => {
        tarjeta.remove();
    });
}




/*
function busquedaEntidad(){ //NO PUDE HACER QUE FUNCIONE LA BUSQUEDA Y LE DI MIL VUELTAS  :(

    const busqueda = document.getElementById("entidades-container");
    const buscar = document.getElementById("buscar");
    //contenedor.innerHTML = '';

    const resultadoBusquedaEntidad = entidades.find((el) => el.nombre == )



   // Recorremos el arreglo de entidades a mostrar
    entidades.forEach((elemt) => {
    const elemt = crearTarjetaEntidad(entidad);
    contenedor.appendChild(tarjeta);

    });
}


btnBusquedaEntidades.addEventListener("keydown", function () {
    //si funcion X es true
    if (busquedaEntidad()){

        
        
            
    
    }  
        
});*/
