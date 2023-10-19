const coleccion_bancos = "bancos"; 

let entidades = JSON.parse(localStorage.getItem(coleccion_bancos)) || [
    {entidad: 1, nombre: "BANCO DE GALICIA Y BUENOS AIRES S.A.U.", direccion: "Tte. Gral. Juan Domingo Perón 407, C1038 CABA", telefono: "0810-444-6500", eventos: 0},
    {entidad: 2, nombre: "BANCO DE LA NACION ARGENTINA", direccion: "Bartolome Mitre 326, C1036 CABA", telefono: "4347-6000", eventos: 0},
    {entidad: 3, nombre: "BANCO DE LA PROVINCIA DE BUENOS AIRES", direccion: "Bartolomé Mitre 430, C1036 CABA", telefono: "0810-22-22776", eventos: 0},
    {entidad: 4, nombre: "BANCO CIUDAD", direccion: "Florida 302, C1313 CABA", telefono: "4329-8600", eventos: 0}
];




//funcion para generar tarjetas visuales de entidades bancarias
function generarTarjetasEntidades() {   

    volverAceroLog();

    const ctnIndBanco = document.createElement("div");
    ctnIndBanco.classList.add ("ctnIndividual")
    ctnIndBanco.id = "ctnIndBanco"

    const ctnAccBanco = document.createElement("div");
    ctnAccBanco.classList.add ("ctnAccBanco")
    ctnAccBanco.id = "ctnAccBanco"

    //boton de nueva entidad
    const btnBuscarEntidad = document.createElement("button");
    btnBuscarEntidad.textContent = "Busqueda de Entidad Financiera";
    btnBuscarEntidad.classList.add("btnBanco");
    btnBuscarEntidad.id = "btnBuscarEntidad";
    //al accionar el boton 
    btnBuscarEntidad.addEventListener("click", function () {
        //se guarda en variable lo ingresado en el input
        const textoBusqueda = document.getElementById("inputEntidad").value;
        //si (el texto es distinto a vacio o null)
        if (textoBusqueda !== "" || textoBusqueda !== null) {
            //variable resultado = arreglo. se filtra(parametro a buscar) funcion
            const resultados = entidades.filter((entidad) =>
                //entidad.nombre
                entidad.nombre.toLowerCase().includes(textoBusqueda.toLowerCase())

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
                    title: 'No se encontraron entidades con ese nombre',                    
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
    const inputEntidad = document.createElement("input");
    inputEntidad.textContent = "Entidad que desea buscar...";    
    inputEntidad.id = "inputEntidad";    

    const ctnAccBanco2 = document.createElement("div");
    ctnAccBanco2.classList.add ("ctnAccBanco")
    ctnAccBanco2.id = "ctnAccBanco2"

    //boton de nueva entidad
    const btnAgregarEntidad = document.createElement("button");
    btnAgregarEntidad.textContent = "Agregar una Entidad Financiera";
    btnAgregarEntidad.classList.add("btnBanco");
    btnAgregarEntidad.id = "btnAgregarEntidad";

    btnAgregarEntidad.addEventListener("click", function () {

        agregarNuevaEntidad()

    })

    //boton para volver al menu
    const btnVolverMenu = document.createElement("button");
    btnVolverMenu.textContent = "Volver al menu Principal";
    btnVolverMenu.classList.add("btnBanco");
    btnVolverMenu.id = "btnVolverMenu";
    //toco boton de retorno
    btnVolverMenu.addEventListener("click", function () {
        //funcion para borrar todo                  
        volverAceroLog();
        //funcion para generar el munu
        generadorMenu();

    })

    document.getElementById("registro-principal").appendChild(ctnIndBanco);

    document.getElementById("ctnIndBanco").appendChild(ctnAccBanco);      
    document.getElementById("ctnAccBanco").appendChild(btnBuscarEntidad);
    document.getElementById("ctnAccBanco").appendChild(inputEntidad);  

    document.getElementById("ctnIndBanco").appendChild(ctnAccBanco2);
    document.getElementById("ctnAccBanco2").appendChild(btnAgregarEntidad);
    document.getElementById("ctnAccBanco2").appendChild(btnVolverMenu);

    //recorremos el arreglo de entidades
    entidades.forEach((entidad) => {
        const tarjeta = crearTarjetaEntidad(entidad);
        ctnIndBanco.appendChild(tarjeta);
    });

}


//funcion para crear una tarjeta de entidad bancaria
function crearTarjetaEntidad(entidad) {

    //contenedor principal por entidad
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("entidad-tarjeta");

    //tres secciones

    //imagen
    const imagen = document.createElement("div");
    imagen.classList.add("imagen-tarjeta");
    imagen.id = "imagen-tarjeta";

    //datos
    const datosTarjeta = document.createElement("div");
    datosTarjeta.classList.add("datos-tarjeta");
    datosTarjeta.id = "datos-tarjeta";

    //los datos
    const nombre = document.createElement("h2");
    nombre.textContent = entidad.nombre;

    const direccion = document.createElement("p");
    direccion.textContent = `Dirección: ${entidad.direccion}`;

    const telefono = document.createElement("p");
    telefono.textContent = `Teléfono: ${entidad.telefono}`;

    const eventos = document.createElement("p");
    eventos.textContent = `Eventos: ${entidad.eventos}`;

    //acciones posibles
    const accionTarjeta = document.createElement("div");
    accionTarjeta.classList.add("accion-tarjeta");
    accionTarjeta.id = "accion-tarjeta";

    //boton de nueva denuncia
    const btn_denuncia = document.createElement("button");
    btn_denuncia.textContent = "Nuevo Evento";
    btn_denuncia.classList.add("btnBanco");
    btn_denuncia.id = "btn_denuncia";

    btn_denuncia.addEventListener("click", () => {
    
        //si se desea agregar una nueva denuncia
        agregarNuevaDenuncia()            
        
    })

    datosTarjeta.appendChild(nombre);
    datosTarjeta.appendChild(direccion);
    datosTarjeta.appendChild(telefono);
    datosTarjeta.appendChild(eventos);

    accionTarjeta.appendChild(btn_denuncia);

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(datosTarjeta);
    tarjeta.appendChild(accionTarjeta);

    

    return tarjeta;
}

//funcion para agregar una nueva entidad
function agregarNuevaEntidad() {

    Swal.fire({
        title: 'Agregar Nueva Entidad Bancaria',
        html: `
            <label for="nombre">Nombre de la Entidad:</label>
            <input type="text" id="nombre" class="swal2-input" required>
            <label for="direccion">Dirección:</label>
            <input type="text" id="direccion" class="swal2-input" required>
            <label for="telefono">Teléfono:</label>
            <input type="text" id="telefono" class="swal2-input" required>
        `,

        focusConfirm: false,
        showCancelButton: true, 
        cancelButtonText: 'Cancelar', 

        preConfirm: () => {

            const nombre = Swal.getPopup().querySelector('#nombre').value;
            const direccion = Swal.getPopup().querySelector('#direccion').value;
            const telefono = Swal.getPopup().querySelector('#telefono').value;

            if (nombre && direccion && telefono) {
                const nuevaEntidad = {
                    entidad: entidades.length + 1,
                    nombre: nombre,
                    direccion: direccion,
                    telefono: telefono,
                    eventos: 0,
                };

                entidades.push(nuevaEntidad);

                localStorage.setItem(coleccion_bancos, JSON.stringify(entidades));

                const tarjeta = crearTarjetaEntidad(nuevaEntidad);
                divContenedorEntidades.appendChild(tarjeta);

                Swal.fire({
                    icon: 'success',
                    title: 'Entidad agregada con exito!',
                });

            } else {

                Swal.showValidationMessage('Por favor, complete todos los campos.');

            }
        },
    });
}


//PARA AGREGAR UNA NUEVA DENUNCIA
function agregarNuevaDenuncia() {
    
    const tiposDelito = ["Phishing", "Punto de compromiso", "Sustracción de Identidad", "Skimming", "Malware", "Otro"];

    const fechaInput = document.createElement('input');
    fechaInput.id = 'fecha';
    fechaInput.classList.add('swal2-input');
    fechaInput.required = true;

    Swal.fire({
        title: 'Agregar Nueva Denuncia',
        html: `
            <label for="fecha">Fecha del evento:</label>
            <div id="datepicker-container" class="swal2-input"></div>
            <label for="delito">Tipo de delito:</label>
            <select id="delito" class="swal2-input" required>
                ${tiposDelito.map(tipo => `<option>${tipo}</option>`).join('')}
            </select>
            <label for="entidad">Entidad involucrada:</label>
            <select id="entidad" class="swal2-input" required>
                ${entidades.map(entidad => `<option>${entidad.nombre}</option>`).join('')}
            </select>
        `,

        customClass: {
            container: 'mi-estilo',
        },

        focusConfirm: false,
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        didOpen: () => {
            flatpickr('#datepicker-container', {
                enableTime: false,
                dateFormat: 'Y-m-d',
                defaultDate: new Date(),
                altInput: fechaInput,
            });
        },
        preConfirm: () => {
            const fecha = fechaInput.value;
            const delito = Swal.getPopup().querySelector('#delito').value;
            const entidadNombre = Swal.getPopup().querySelector('#entidad').value;

            if (fecha && delito && entidadNombre) {
                const entidad = entidades.find(entidad => entidad.nombre === entidadNombre);

                if (entidad) {
                    //agrega la denuncia a la entidad
                    if (!entidad.denuncias) {
                        entidad.denuncias = [];
                    }
                    entidad.denuncias.push({
                        fecha: fecha,
                        delito: delito,
                        autor: usuario_operando,
                    });

                    //incrementa el contador de eventos en la entidad bancaria
                    entidad.eventos++;

                    localStorage.setItem(coleccion_bancos, JSON.stringify(entidades));

                    Swal.fire({
                        icon: 'success',
                        title: 'Denuncia agregada con éxito!',
                    });
                }
            } else {
                Swal.showValidationMessage('Por favor, complete todos los campos.');
            }
        },
    });
}


//funcion para que me borre las tarjetas creadas -- sino cada vez que entraba y salia me las duplicaba
function volverAcero() {
    const tarjetas = document.querySelectorAll(".entidad-tarjeta");
    tarjetas.forEach((tarjeta) => {
        tarjeta.remove();
    });
}


//funcion basica
function resultadosDeBusqueda(resultados) {
    
    //variable para que capte el contenedoer por id 
    const divContenedorEntidades = document.getElementById("ctnIndBanco");
    //borro todas las tarjetas creadas
    volverAcero();
    //el resultado de la busqueda. recorre el arreglo 
    resultados.forEach((resultado) => {
        const tarjeta = crearTarjetaEntidad(resultado);
        divContenedorEntidades.appendChild(tarjeta);
    });
}


