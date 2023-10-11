const coleccion_delitos = "delitos"; 

//base de datos de los distintos delitos denunciados o registrados
const denuncias = JSON.parse(localStorage.getItem(coleccion_delitos)) || [
    {fecha: 11-2-2023, delito: "Phising", entidad: "Banco Galicia", autor: "santiago"},
    {fecha: 14-1-2023, delito: "Punto de compromiso", entidad: "Banco Provincia", autor: "visita"},
    {fecha: 21-5-2023, delito: "skimming", entidad: "Banco Nacion", autor: "nicolas"},
    {fecha: 16-3-2023, delito: "Sustraccion de Identidad", entidad: "Banco Ciudad", autor: "visita"}
]

//funcion para generar las tarjetas
function generarTarjetasDelitos() {    
    
    volverAceroDelitos();

    denuncias.forEach((denuncia) => {
        const tarjeta = crearTarjetaDelito(denuncia);
        divContenedorDelitos.appendChild(tarjeta);
    });
}

//funcion para crear las tarjetas de los delitos
function crearTarjetaDelito(denuncia) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("delito-tarjeta");

    const fecha = document.createElement("p");
    const fechaObj = new Date(denuncia.fecha); 
    fecha.textContent = `Fecha: ${fechaObj.toLocaleDateString()}`; 

    const tipoDelito = document.createElement("p");
    tipoDelito.textContent = `Tipo de Delito: ${denuncia.delito}`;

    const entidad = document.createElement("p");
    entidad.textContent = `Entidad Bancaria: ${denuncia.entidad}`;

    const autor = document.createElement("p");
    autor.textContent = `Autor: ${denuncia.autor}`;

    tarjeta.appendChild(fecha);
    tarjeta.appendChild(tipoDelito);
    tarjeta.appendChild(entidad);
    tarjeta.appendChild(autor);

    return tarjeta;
}

//funcion para que me borre las tarjetas creadas -- sino cada vez que entraba y salia me las duplicaba
function volverAceroDelitos() {
    const tarjetas = document.querySelectorAll(".delito-tarjeta");
    tarjetas.forEach((tarjeta) => {
        tarjeta.remove();
    });
}




function resultadosDeBusquedaDelitos(resultados) {
    
    const divContenedorDelitos = document.getElementById("delitos-container");
    
    volverAceroDelitos();
    
    resultados.forEach((resultado) => {
        const tarjeta = crearTarjetaDelito(resultado);
        divContenedorDelitos.appendChild(tarjeta);

    });
    
}


//boton de busqueda 
const btnBuscarDelito = document.getElementById("btn_buscar_delito");


btnBuscarDelito.addEventListener("click", function () {
    const textoBusquedadelitos = document.getElementById("buscar-delito").value;

    if (textoBusquedadelitos !== "") {
        
        const resultados = denuncias.filter((delito) =>
        delito.delito.toLowerCase().includes(textoBusquedadelitos.toLowerCase())
        );

        if (resultados.length > 0) {
            resultadosDeBusquedaDelitos(resultados);
        } else {
            alert ("No se encontraron entidades con ese nombre.");
        }
    } else {
        alert("El campo de búsqueda está vacío.");
    }

    alert("Búsqueda de delitos: " + textoBusquedadelitos);
});
