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

    //contenedor individual
    const ctnIndBanco = document.createElement("div");
    ctnIndBanco.classList.add ("ctnIndividual")
    ctnIndBanco.id = "ctnIndBanco"

    //div contenedor
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
    btnAgregarEntidad.classList.add("btnAgregarDenuncia");
    btnAgregarEntidad.id = "btnAgregarEntidad";

    btnAgregarEntidad.addEventListener("click", function () {

        agregarNuevaEntidad()

    })

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

    //boton de nueva denuncia
    const btn_denuncia = document.createElement("button");
    btn_denuncia.textContent = "Nuevo Evento";
    btn_denuncia.classList.add("btnAgregarDenuncia");
    btn_denuncia.id = "btn_denuncia";

    btn_denuncia.addEventListener("click", () => {
    
        //si se desea agregar una nueva denuncia
        agregarNuevaDenuncia()            
        
    })

    //vinculamos los elementos
    document.getElementById("registro-principal").appendChild(ctnIndBanco);

    document.getElementById("ctnIndBanco").appendChild(ctnAccBanco);      
    document.getElementById("ctnAccBanco").appendChild(btnBuscarEntidad);
    document.getElementById("ctnAccBanco").appendChild(inputEntidad);  

    document.getElementById("ctnIndBanco").appendChild(ctnAccBanco2);
    document.getElementById("ctnAccBanco2").appendChild(btnAgregarEntidad);
    document.getElementById("ctnAccBanco2").appendChild(btn_denuncia);
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

    datosTarjeta.appendChild(nombre);
    datosTarjeta.appendChild(direccion);
    datosTarjeta.appendChild(telefono);
    datosTarjeta.appendChild(eventos);    

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
                ctnIndBanco.appendChild(tarjeta);

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



//funcion para agregar nueva denuncia - plantilla
function agregarNuevaDenuncia() {

    //barramos todos
    volverAceroLog()

    const nombresEntidades = entidades.map(entidad => entidad.nombre);

    //creamos el div para contener denuncias
    const formularioDenuncia = document.createElement("div");
    formularioDenuncia.classList.add ("tarjeta-denuncia");
    formularioDenuncia.id = "denuncia-tarjeta";

    //titulo
    const tituloDenuncia = document.createElement("h2");
    tituloDenuncia.classList.add ("titulo-h2");
    tituloDenuncia.textContent = "Nuevo Evento";

    //fecha

    //titulo
    const labelFecha = document.createElement("label");
    labelFecha.classList.add ("label-Fecha")

    //input para la fecha del evento
    const inputFecha = document.createElement("input");
    inputFecha.id = "fecha";
    inputFecha.type = "text"; // Cambiar el tipo a "text" para usar el datepicker
    inputFecha.placeholder = "Fecha del Evento";

    //dalito

    //label para el tipo de evento
    const labelDelito = document.createElement("label");
    labelDelito.textContent = "Tipo de Evento";

    //select para el tipo de evento
    const selectDelito = document.createElement("select");
    selectDelito.id = "delito";
    
    //opciones para el select basadas en el arreglo de tipos de eventos
    const tiposDelito = ["Phishing", "Punto de compromiso", "Sustracción de Identidad", "Skimming", "Malware", "Otro"];
    tiposDelito.forEach(tipo => {
        const option = document.createElement("option");
        option.value = tipo;
        option.text = tipo;
        selectDelito.appendChild(option);
    });

    //entidad

    //label
    const labelEntidad = document.createElement("label");
    labelEntidad.textContent = "Entidad involucrada";

    //select para la entidad
    const selectEntidad = document.createElement("select");
    selectEntidad.id = "entidad";

    //opciones para la entidad
    const eventoEntidades = nombresEntidades;
    eventoEntidades.forEach (tipo => {

        const option = document.createElement("option");
        option.value = tipo;
        option.text = tipo;
        selectEntidad.appendChild(option)        

    })

    //contenedor botones
    const ctnAccDenuncia = document.createElement("div")
    ctnAccDenuncia.classList.add ("ctnAccBanco")

    //boton "Agregar"
    const btnAgregarDenuncia = document.createElement("button");
    btnAgregarDenuncia.textContent = "Agregar";
    btnAgregarDenuncia.classList.add("btnAgregarDenuncia");
    btnAgregarDenuncia.id = "btnAgregarDenuncia";

    //si lo tocan
    btnAgregarDenuncia.addEventListener("click", function () {
        
        if(denunciaAgregada())
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
                    nuevaDenuncia()
                    //se vacia la pagina
        
                    
                    Swal.fire({
                        
                        icon: 'success',
                        title: '¡Nueva Denuncia Registra con Exito!',
                        showConfirmButton: false,
                        timer: 1500,
                        footer: '<h5>Drothar-Team<h5>'
        
                    })
                    formularioDenuncia.remove();
                    generarTarjetasEntidades()
        }})   
        
    })

    //boton "Cancelar"
    const btnCancelar = document.createElement("button");
    btnCancelar.textContent = "Cancelar";
    btnCancelar.classList.add("btnVolverMenu");
    btnCancelar.id = "btnCancelar";

    //si lo tocan
    btnCancelar.addEventListener("click", function () {
        //si el usuario realmente desea cancelar
        Swal.fire({
            title: 'Cancelar carga de denuncia',
            text: '¿Está seguro que desea cancelar la carga de la denuncia?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, deseo salir',
        }).then((result) => {
            if (result.isConfirmed) {
                //confirma, eliminamos el formulario de denuncia
                formularioDenuncia.remove();
                generarTarjetasEntidades()
            }
        });
    });


    //elementos al formulario
    formularioDenuncia.appendChild(tituloDenuncia);
    formularioDenuncia.appendChild(labelFecha);
    formularioDenuncia.appendChild(inputFecha);
    formularioDenuncia.appendChild(labelDelito);
    formularioDenuncia.appendChild(selectDelito);
    formularioDenuncia.appendChild(labelEntidad);
    formularioDenuncia.appendChild(selectEntidad);
    formularioDenuncia.appendChild(ctnAccDenuncia);
    ctnAccDenuncia.appendChild(btnAgregarDenuncia);
    ctnAccDenuncia.appendChild(btnCancelar);
    

    //formulario al documento
    document.getElementById("registro-principal").appendChild(formularioDenuncia);
    

    // Inicializar el datepicker en el input de fecha
    flatpickr(inputFecha, {
        dateFormat: "Y-m-d",
        // Opciones adicionales aquí
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
    const ctnIndBanco = document.getElementById("ctnIndBanco");
    //borro todas las tarjetas creadas
    volverAcero();
    //el resultado de la busqueda. recorre el arreglo 
    resultados.forEach((resultado) => {
        const tarjeta = crearTarjetaEntidad(resultado);
        ctnIndBanco.appendChild(tarjeta);
    });
}


//funcion para validar y agregar una denuncia
function denunciaAgregada() {

    avisos.innerHTML = "";

    let denunciaFecha = document.getElementById("fecha").value;
    let denunciaDelito = document.getElementById("delito").value;
    let denunciaEntidad = document.getElementById("entidad").value;

    let arreglo_mensajes_denuncia = [];

    if (!denunciaFecha) {
        arreglo_mensajes_denuncia.push("Debe seleccionar una fecha válida");
    }

    if (!denunciaDelito) {
        arreglo_mensajes_denuncia.push("Debe seleccionar un tipo de delito");
    }

    if (!denunciaEntidad) {
        arreglo_mensajes_denuncia.push("Debe seleccionar una entidad");
    }


    if (arreglo_mensajes_denuncia.length > 0) {

        let ul = document.createElement("ul");

        arreglo_mensajes_denuncia.forEach((mensaje) => {

            let li = document.createElement("li");

            li.textContent = mensaje;

            ul.appendChild (li)

        })

        //mostrar la alerta de SweetAlert2 con la lista de errores
        Swal.fire({
            icon: 'error',
            title: 'No es posible registrar el usuario',
            html: ul.outerHTML,
            footer: '<h5>Drothar-Team<h5>'
        });

        return false;
    }
    
    return true;



}



