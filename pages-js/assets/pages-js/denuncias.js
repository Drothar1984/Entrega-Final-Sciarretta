const coleccion_delitos = "delitos";
    
//base de datos de los distintos delitos denunciados o registrados
const denuncias = JSON.parse(localStorage.getItem(coleccion_delitos)) || []    


//clase constructora de usuario
class Denuncia {

    constructor(fecha,delito,entidad){

        this.fecha = fecha;
        this.delito = delito;
        this.entidad = entidad;        
        this.autor = usuario_operando; 

    }

    static getInstance (d){

        return new Denuncia (d.fecha, d.delito, d.entidad);

    }

    getTipo(){

        return this.tipo;

    }

}


//funcion nueva denuncia
function nuevaDenuncia() {
    //captura los valores ingresados
    let denunciaFecha = document.getElementById("fecha").value;
    let denunciaDelito = document.getElementById("delito").value;
    let denunciaEntidad = document.getElementById("entidad").value;
    //crea la variable con el constructor
    const denuncia = new Denuncia(denunciaFecha, denunciaDelito, denunciaEntidad);
    //el autor como es el validado en primer instancia se agrega por separado
    denuncia.autor = usuario_operando.nombre;

    //empuja la denuncia ingresada en la colleccion
    denuncias.push(denuncia);
    //se carga la nueva coleccion
    localStorage.setItem(coleccion_delitos, JSON.stringify(denuncias));
    //se busca que la entidad 
    const entidadSeleccionada = entidades.find((e) => e.nombre === denunciaEntidad);
    //si se encuentra la entidad se le suma 1 a los eventos
    if (entidadSeleccionada) {
        entidadSeleccionada.eventos += 1;
        //se actualiza o carga la coleccion
        localStorage.setItem(coleccion_bancos, JSON.stringify(entidades));
    }
}




//funcion generadora de plantilla estaditisca
function generadorEstadistica () {

    volverAceroLog();

    //contenedor inicial
    const ctnEstadistica = document.createElement("div");
    ctnEstadistica.classList.add ("contenedor_central_secundario");
    ctnEstadistica.id = "ctnEstadistica";

    //titulo del menu
    const titulo = document.createElement("h1");
    titulo.textContent = "Denuncias";
    titulo.id = "titulo";

    //contendor de acciones
    const ctnAccBanco = document.createElement("div");
    ctnAccBanco.classList.add ("ctnAccBanco")
    ctnAccBanco.id = "ctnAccBanco"

    //boton de buscar evento
    const btnBuscarEvento = document.createElement("button");
    btnBuscarEvento.textContent = "Busqueda de Evento";
    btnBuscarEvento.classList.add("btnBanco");
    btnBuscarEvento.id = "btnBuscarEvento";
    //al accionar el boton 
    btnBuscarEvento.addEventListener("click", function () {
        //se guarda en variable lo ingresado en el input
        const textoBusqueda = document.getElementById("inputEvento").value;
        //si (el texto es distinto a vacio o null)
        if (textoBusqueda !== "" || textoBusqueda !== null) {
            //variable resultado = arreglo. se filtra(parametro a buscar) funcion
            const resultados = denuncias.filter((denuncia) =>
                //entidad.nombre
                denuncia.delito.toLowerCase().includes(textoBusqueda.toLowerCase())

            );
            //si resultado mayor a 0
            if (resultados.length > 0) {
                //se ejecuta funcion resultado de busqueda(parametro de validacion)
                resultadosDeBusqueda(resultados);
            //sino 
            } else {
                //mensaje emergente error
                Swal.fire({
                    icon: 'error',
                    title: 'No se encontraron Evento con ese delito',                    
                    footer: '<h5>Drothar-Team<h5>'
                });

            }
        //si esta vacio
        } else {
            //mensaje emergente error
            Swal.fire({

                icon: 'error',
                title: 'El campo de búsqueda está vacío',                    
                footer: '<h5>Drothar-Team<h5>'

            });
                    
        }
        //salio todo bien muestra mensaje
        alert ("Búsqueda de entidad: " + textoBusqueda);

    });

    //input donde se escribe la entidad a buscar
    const inputEvento = document.createElement("input");
    inputEvento.textContent = "Evento que desea buscar...";    
    inputEvento.id = "inputEvento";  
    
    //boton para volver al menu
    const btnVolverMenu = document.createElement("button");
    btnVolverMenu.textContent = "Volver al menu Principal";
    btnVolverMenu.classList.add("btnVolverMenu");
    btnVolverMenu.id = "btnVolverMenu";
    //toco boton de retorno
    btnVolverMenu.addEventListener("click", function () {
        //funcion para borrar todo                  
        volverAceroLog();
        //funcion para generar el munu
        generadorMenu();

    })

    const ctnIndBanco = document.createElement("div");
    ctnIndBanco.classList.add ("ctnIndividual")
    ctnIndBanco.id = "ctnIndBanco"

    //vinculamos
    document.getElementById("registro-principal").appendChild(ctnEstadistica);

    document.getElementById("ctnEstadistica").appendChild(titulo);
    document.getElementById("ctnEstadistica").appendChild(ctnAccBanco);

    document.getElementById("ctnAccBanco").appendChild(btnBuscarEvento);
    document.getElementById("ctnAccBanco").appendChild(inputEvento);
    document.getElementById("ctnAccBanco").appendChild(btnVolverMenu);

    document.getElementById("ctnAccBanco").appendChild(ctnIndBanco);
    


    //recorremos el arreglo denuncias
    denuncias.forEach((denuncia) => {
        const tarjeta = crearTarjetaEvento(denuncia);
        ctnIndBanco.appendChild(tarjeta);
    });

}

//funcion basica
function resultadosDeBusqueda(resultados) {
    
    //variable para que capte el contenedoer por id 
    const ctnIndBanco = document.getElementById("ctnIndBanco");
    //borro todas las tarjetas creadas
    volverAcero();
    //el resultado de la busqueda. recorre el arreglo 
    resultados.forEach((resultado) => {
        const tarjeta = crearTarjetaEvento(resultado);
        ctnIndBanco.appendChild(tarjeta);
    });
}


//función para crear una tarjeta de entidad bancaria
function crearTarjetaEvento(denuncia) {
    //tarjeta de denuncia
    const tarjeta = document.createElement("div");
    tarjeta.id = "tarjetaDenuncia";
    tarjeta.classList.add("entidad-tarjeta");

    const fecha = document.createElement("p");
    fecha.id = "fecha";
    fecha.textContent = `Fecha del hecho: ${denuncia.fecha}`;

    const delito = document.createElement("p");
    delito.id = "delito";
    delito.textContent = `Tipo de Evento: ${denuncia.delito}`;

    const entidad = document.createElement("p");
    entidad.id = "entidad";
    entidad.textContent = `Entidad Involucrada: ${denuncia.entidad}`;

    const autor = document.createElement("p");
    autor.id = "autor";
    autor.textContent = `Autor: ${denuncia.autor}`;

    //contenedor para datos
    const datosTarjeta = document.createElement("div");
    datosTarjeta.classList.add("datos-tarjeta");
    datosTarjeta.id = "datosTarjeta";

    datosTarjeta.appendChild(fecha);
    datosTarjeta.appendChild(delito);
    datosTarjeta.appendChild(entidad);
    datosTarjeta.appendChild(autor);

    //acciones posibles
    const accionTarjeta = document.createElement("div");
    accionTarjeta.classList.add("accion-tarjeta");
    accionTarjeta.id = "accion-tarjeta";

    tarjeta.appendChild(datosTarjeta);
    tarjeta.appendChild(accionTarjeta);

    //tarjeta al contenedor individual
    const contenedorTarjeta = document.createElement("div");
    contenedorTarjeta.classList.add("tarjeta-contenedor");
    contenedorTarjeta.id = "contenedorTarjeta";
    contenedorTarjeta.appendChild(tarjeta);

    //el contenedor individual al contenedor de estadísticas
    document.getElementById("ctnIndBanco").appendChild(contenedorTarjeta);

    return contenedorTarjeta;
}