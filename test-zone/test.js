//AQUI VOY PROBANDO LAS FUNCIONES SIN MIEDO DE ROMPER TODO 

// Base de datos de usuarios, contraseñas etc.
//primero comunes 
/*
const user00 = "santiago"
const pass00 = "000001"
const nombre00 = "Santiago"
const apellido00 = "Sciarretta"
const tipo00 = "Admnin"

const user01 = "nicolas"
const pass01 = "000002"
const nombre01 = "Nicolas"
const apellido01 = "Martini"
const tipo01 = "Admnin"

const user02 = "Tutor"
const pass02 = "000003"
const nombre02 = "Tutor"
const apellido02 = "Corrector"
const tipo02 = "Admnin"

const user03 = "visita"
const pass03 = "000004"
const nombre03 = "visita"
const apellido03 = "anonimo"
const tipo03 = "Regular"
*/

//arreglos con objetos 
const usuarios = [
    {user: "santiago", pass: "000001", nombre: "Santiago", apellido: "Sciarretta", tipo: "Admnin"},
    {user: "nicolas", pass: "000002", nombre: "Nicolas", apellido: "Martini", tipo: "Admnin"},
    {user: "Tutor", pass: "000003", nombre: "Tutor", apellido: "Corrector", tipo: "Admnin"},
    {user: "visita", pass: "000004", nombre: "visita",apellido: "anonimo", tipo: "Regular"},    
]

const entidades = [
    {entidad: 1, nombre: "BANCO DE GALICIA Y BUENOS AIRES S.A.U.", direccion:"Tte. Gral. Juan Domingo Perón 407, C1038 CABA", telfono: "0810-444-6500", eventos: 0},
    {entidad: 2, nombre: "BANCO DE LA NACION ARGENTINA", direccion:"Bartolome Mitre 326, C1036 CABA", telfono: "4347-6000", eventos: 0},
    {entidad: 3, nombre: "BANCO DE LA PROVINCIA DE BUENOS AIRES", direccion:"Bartolomé Mitre 430, C1036 CABA", telfono: "0810-22-22776", eventos: 0},
    {entidad: 4, nombre: "BANCO CIUDAD", direccion:"Florida 302, C1313 CABA", telfono: "4329-8600", eventos: 0}
]


const denuncias = [
    {fecha: 11-2-2023, delito: "Phising", entidad: "Banco Galicia", autor: "santiago"},
    {fecha: 14-1-2023, delito: "Punto de compromiso", entidad: "Banco Provincia", autor: "visita"},
    {fecha: 21-5-2023, delito: "skimming", entidad: "Banco Nacion", autor: "nicolas"},
    {fecha: 16-3-2023, delito: "Sustraccion de Identidad", entidad: "Banco Ciudad", autor: "visita"}
]


//funcion de bienvenida
function bienvenida() {

    //le damos la bienvenida utilizando confirm
    let confirmacion = confirm("¡Bienvenido a la plataforma interactiva! \n¿Estás registrado?");
    
    //Si el usuario hace clic en "Aceptar" en el cuadro de confirmación
    if (confirmacion) {      

        //solicitud de ingreso de usuario
        let usuario = prompt("Por favor, ingresa tu nombre de usuario:");        
        
        //solicitud de ingreso de contraseña
        let contraseña = prompt("Por favor, ingresa tu contraseña:");  
        
        //validacion de usuario y contraseña                        
        if(validacionUserPass(usuario,contraseña)){

            //un mensaje de éxito 
            alert("Inicio de sesión exitoso. ¡Bienvenido de nuevo, " + usuario + "!");

            //iniciamos el despliegue de opciones
            menuDesplegable();

        }else{
            //retornamos al punto 0
            bienvenida();

        }
        

    } else {

        //en el caso de que la opcion sea "Cancelar" 
        alert("¡No estás registrado! Por favor, regístrate para acceder.");

        //se le consulta si desea registrarse
        let registro = confirm("¡Desea Registrarse!")

        //en caso afirmativo
        if (registro) {
                
            nuevoRegistro()                 
            
        //por el contrario
        } else {
        
            //muchas gracias vuelva pronto 
            alert("¡Gracias por su visita! \nVuelva Pronto \n;-)");
            
        }

    }    

}


//funcion validadora simple 
function validacionUserPass(usuario, contraseña) {
    
    //creacion de nuevo arreglo, difinido por lo que encuentre en los objetos que se encuentran dentro del arreglo original denominado usuarios, que a su vez tiene estos cargados en distintos objetos
    const userEncontrado = usuarios.find((elemento) => elemento.user === usuario)

    //como no confiamos en el usuario verificamos que ingrese primero algo     
    if (!userEncontrado) {
        alert("Usuario incorrecto");
        return false;
    }

    if (userEncontrado.pass !== contraseña) {
        alert("Contraseña incorrecta");
        return false;
    }

    //Si llegamos aqui, significa que el usuario y la contraseña son correctos
    return true;

}


//funcion para nuevos usuarios
function nuevoRegistro (){

    //solicitud de datos
    let nuevoUsuario = prompt ("Ingrese cual sera su nombre de usuario");
    let nuevaContraseña = prompt ("Ingrese que contraseña desea - Eliga con sabiduria");
    let nuevoNombre = prompt ("Ingrese por favor su nombre");
    let nuevoApellido = prompt ("Ingrese por ultimo su apellido");

    //como no confiamos en el usuario siempre revisamos los datos ingresados

    //si ingresa algun dato en blanco o toca cancelar
    if (nuevoUsuario === "" || nuevoUsuario === null ) {

        //le enviamos un mensaje especifico
        alert("Es necesario que ingrese un nombre de usuario válido!!!");

        //retornando ademas un valor negativo
        return false;

    } else if (nuevaContraseña === "" || nuevaContraseña === null ) {

        alert("Es necesario que ingrese una contraseña válida!!!");

        return false;

    } else if (nuevoNombre === "" || nuevoNombre === null ) {

        alert("Es necesario que ingrese un nombre válido!!!");

        return false;

    } else if (nuevoApellido === "" || nuevoApellido === null ) {

        alert("Es necesario que ingrese un apellido válido!!!");

        return false;

    }


    //creamos un objeto del usuario nuevo con los datos previamente ingresados
    const nuevoUsuarioAgregar = {

        user: nuevoUsuario,
        pass: nuevaContraseña,
        nombre: nuevoNombre,
        apellido: nuevoApellido,
        tipo: "Regular"

    };
   
        //si los datos son validos le damos un alert de logrado jajajajaj
        alert("Se ha registrado con exito.\n¡Bienvenido "+ nuevoUsuarioAgregar.nombre + "!")

        //agregamos el nuevo usuario al final de la base de datos creada
        usuarios.push(nuevoUsuarioAgregar);
        return true;

}




//despliegue para menu primario
function menuDesplegable() {
    
    do {

        //listado de opciones
        let mensaje = "Indique la operación que desea realizar: ";
        mensaje += "\n1) Realizar una denuncia ";
        mensaje += "\n2) Consultar base de datos sobre bancos ";
        mensaje += "\n3) Consultar Estadística sobre delitos";
        mensaje += "\n4) Consultar Bitácora (próximamente solo para admin-user)";
        mensaje += "\n5) Salir ";

        let resp = prompt(mensaje);

        switch (resp) {
            case "1":
                nuevoIngreso();
                break;
            case "2":
                alert("Las entidades son: \n" + entidades.map(entidad => entidad.nombre).join("\n"));
                break;
            case "3":
                mostrarDenuncias();
                break;
            case "4":
                ver_bitacora();
                break;
            case "5":
            case null:
                alert("Gracias por utilizar nuestra página :) ");
                return;
            default:
                alert("No ingresó una opción válida");

        }

    } while (true);

}



function nuevoIngreso() {
    //Datos solicitados
    let dato1 =prompt("Ingrese la fecha del evento");
    //Que elija el delito en cuestión
    let dato2 =delitos();
    //Que elija el banco en cuestión 
    let dato3 =prompt("ingrese la entidad bancaria"); //aun el codigo de esta no me sale jajaja perdon
    //El usuario logueado será el autor del nuevo ingreso
    let dato4 = prompt("nombre"); //a futuro incluire una funcion que vincule el usuario registrado

    //Como no confiamos en el usuario siempre revisamos los datos ingresados

    //Si ingresa algún dato en blanco o toca cancelar
    if (dato1 === "" || dato1 === null) {
        // Le enviamos un mensaje especifico
        alert("Es necesario que ingrese una fecha válida!");
        //Retornamos ademas un valor negativo
        return false;
    } else if (dato2 === null) {
        alert("Si no hubo acción no hay delito!");
        return false;
    } else if (dato3 === null) {
        alert("Si no hay entidad bancaria, no podemos ayudarlo!");
        return false;
    }

    // Creamos un objeto del usuario nuevo con los datos previamente ingresados
    const nuevoIngreso = {
        fecha: dato1,
        delito: dato2,
        entidad: dato3,
        autor: dato4
    }

    // Si los datos son válidos le damos un alert de logrado
    alert("Se ha registrado con éxito.\n¡La denuncia de " + dato4 + "!");
    // Agregamos el nuevo usuario al final de la base de datos creada
    denuncias.push(nuevoIngreso);
    return true;
}



function delitos() {
    // Listado de opciones
    let mensaje = "Indique el tipo de delito: ";
    mensaje += "\n1) Punto de compromiso - Comercio o empleado Desleal";
    mensaje += "\n2) Sustraccion de Identidad - Han suplantado su identidad";
    mensaje += "\n3) Skimming - Fue víctima de un aparato electrónico";
    mensaje += "\n4) Phising - Fue víctima de un correo o lugar malicioso";
    mensaje += "\n5) Salir ";

    let resp = prompt(mensaje);

    switch (resp) {
        case "1":
            return "Punto de compromiso";
        case "2":
            return "Sustraccion de Identidad";
        case "3":
            return "Skimming";
        case "4":
            return "Phising";
        case "5":
        case null:
            alert("Gracias por utilizar nuestra página :) ");
            return null;
        default:
            alert("No ingresó una opción válida");
            return delitos(); // Vuelve a solicitar la opción
    }
}


//Muestra las denuncias realizadas


function mostrarDenuncias() {
    let mensaje = "Denuncias registradas:\n";

    denuncias.forEach((denuncia, index) => {
        mensaje += `${index + 1}) Fecha: ${denuncia.fecha}, Delito: ${denuncia.delito}, Entidad Bancaria: ${denuncia.entidad}, Autor: ${denuncia.autor}\n`;
    });

    alert(mensaje);
}3



/*
//disculpe profe no se me ocurria otra forma de hacerlo jajajajaj 
function entidades() {

    //mientras que la condicion este en true se seguira repitiendo
    let flag = true;

    //bucle mientras que este en true
    while (flag) {

        //listado de opciones
        let mensaje = "Indique el Banco prestador del Servicio: ";
        mensaje += "\n1) Banco Galicia";
        mensaje += "\n2) Banco Provincia";
        mensaje += "\n3) Banco Nacion";
        mensaje += "\n4) Banco Ciudad";
        mensaje += "\n5) Otro - Que no se encuentra en el listado";
        mensaje += "\n6) Salir ";

        let resp = prompt(mensaje);

        switch (resp) {

            case "1":
                mensaje = "Banco Galicia";
                break;
            case "2":
                mensaje = "Banco Provincia";
                break;
            case "3":
                mensaje = "Banco Nacion";
                break;
            case "4":
                mensaje = "Banco Ciudad";
                break;
            case "5":
                confirm("Si el banco en cuestion no se encuentra entre las opciones puede ayudarnos a mejorar");
                if(confirm = true ){

                    //ACA FALTARIA PARA PODER AGREGAR

                }
                
                break;
            case "6":
                alert("Gracias por utilizar nuestra pagina :) ");
                flag = false;
                break;
            case null:
                alert("Gracias por utilizar nuestra pagina :) ");
                flag = false;
                break;
            default:
                alert("No ingreso una opcion valida");


        }
    }

}

*/




// Llamar a la función de bienvenida cuando se carga la página
bienvenida();