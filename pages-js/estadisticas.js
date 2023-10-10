
//base de datos de los distintos delitos denunciados o registrados
const denuncias = [
    {fecha: 11-2-2023, delito: "Phising", entidad: "Banco Galicia", autor: "santiago"},
    {fecha: 14-1-2023, delito: "Punto de compromiso", entidad: "Banco Provincia", autor: "visita"},
    {fecha: 21-5-2023, delito: "skimming", entidad: "Banco Nacion", autor: "nicolas"},
    {fecha: 16-3-2023, delito: "Sustraccion de Identidad", entidad: "Banco Ciudad", autor: "visita"}
]





function generarTarjetasDelitos() {    

    
    denuncias.forEach((denuncia) => {
        const tarjeta = crearTarjetaDelito(denuncia);
        divContenedorDelitos.appendChild(tarjeta);
    });
}

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
