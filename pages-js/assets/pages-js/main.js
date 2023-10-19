

//funcion generadora del menu 
function generadorMenu (){

    //contenedor principal
    const contenedorPrincipal = document.createElement("div");
    contenedorPrincipal.classList.add("contenedor_central_secundario");
    contenedorPrincipal.id = "contenedorPrincipal";

    //titulo del menu
    const titulo = document.createElement("h1")
    titulo.textContent = "Fraudes Bancarios";

    //contenedores

    //BANCOS
    const ctnSecBancos = document.createElement("div");
    ctnSecBancos.classList.add("contenedor_secundario");

    //label 
    const labelBancos = document.createElement("label");
    labelBancos.classList.add("label_menu")
    labelBancos.textContent = "Entidades Bancarias";

    //boton 
    const btn_ingreso_bancos = document.createElement("button");
    btn_ingreso_bancos.textContent = "Ingresar";
    btn_ingreso_bancos.classList.add("btn_menu");
    btn_ingreso_bancos.id = "btn_ingreso_bancos";

    btn_ingreso_bancos.addEventListener("click", () => {

        volverAceroLog()

        generarTarjetasEntidades()
        
    })

    //DENUNCIAS
    const ctnSecCentral = document.createElement("div");
    ctnSecCentral.classList.add("contenedor_secundario");

    //label 
    const labelCentral = document.createElement("label");
    labelCentral.classList.add("label_menu")
    labelCentral.textContent = "Banco Central";

    //boton 
    const btnCentral = document.createElement("button");
    btnCentral.textContent = "Ingresar";
    btnCentral.classList.add("btn_menu");
    btnCentral.id = "btn_ingreso_central";

    btnCentral.addEventListener("click", () => {

        volverAceroLog();

        generadorContenedorCentral();

    })

    //ESTADISTICAS
    const ctnSecEstadistica = document.createElement("div");
    ctnSecEstadistica.classList.add("contenedor_secundario");

    //label 
    const labelEstadistica = document.createElement("label");
    labelEstadistica.classList.add("label_menu")
    labelEstadistica.textContent = "Estadisticas delictivas";

    //boton 
    const btn_ingreso_estadistica = document.createElement("button");
    btn_ingreso_estadistica.textContent = "Ingresar";
    btn_ingreso_estadistica.classList.add("btn_menu");
    btn_ingreso_estadistica.id = "btn_ingreso_estadistica";

    btn_ingreso_estadistica.addEventListener("click", () => {

        volverAceroLog();

        generadorEstadistica ();

    })
    

    //BOTON DE SALIDA
    const salida = document.createElement("button");
    salida.textContent = "Salir de la Plataforma";
    salida.classList.add("btn_menu");
    salida.id = "btn_salida";

    salida.addEventListener("click", () => {

        Swal.fire({
        
            title: 'Verificacion',
            text: "esta seguro que desea salir?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, deseo Salir!'
            }).then((result) => {

                if (result.isConfirmed) {
                    
                    volverAceroLog()

                    avisos = "";
                
                    generadorContenedorPrincipal()

                    Swal.fire({
                        
                        icon: 'success',
                        title: 'Sesion Finalizada',
                        showConfirmButton: false,
                        timer: 1000
                    })

                    
                }

            })  

    });

    //agregando al div contenedor

    //TITULO
    contenedorPrincipal.appendChild(titulo);

    //BANCOS
    contenedorPrincipal.appendChild(ctnSecBancos);
    ctnSecBancos.appendChild(labelBancos);
    ctnSecBancos.appendChild(btn_ingreso_bancos);
    //DENUNCIAS
    contenedorPrincipal.appendChild(ctnSecCentral);
    ctnSecCentral.appendChild(labelCentral);
    ctnSecCentral.appendChild(btnCentral);
    //ESTADISTICAS
    contenedorPrincipal.appendChild(ctnSecEstadistica);
    ctnSecEstadistica.appendChild(labelEstadistica);
    ctnSecEstadistica.appendChild(btn_ingreso_estadistica);

    //boton de salida
    contenedorPrincipal.appendChild(salida);

    //el div lo agregamos
    document.getElementById("registro-principal").appendChild(contenedorPrincipal);
}