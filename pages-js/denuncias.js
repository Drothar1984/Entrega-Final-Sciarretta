

function nuevaDenuncia() {
    
    avisos_denuncia.innerHTML = "";

    const fecha = document.getElementById("denuncia_fecha").value;
    const delito = document.getElementById("denuncia_delito").value;
    const entidad = document.getElementById("denuncia_entidad").value;
    
    let arreglo_mensaje_denuncia = [];

    if (fecha  === "" || fecha === null){
        arreglo_mensaje_denuncia.push("Es necesario ingresar una fecha");
    }
    if (delito  === "" || delito === null){
        arreglo_mensaje_denuncia.push("Es necesario ingresar el tipo de delito");
    }
    if (entidad  === "" || entidad === null){
        arreglo_mensaje_denuncia.push("Es necesario ingresar la entidad involucrada");
    }

    if (arreglo_mensaje_denuncia.length > 0) {

        let lista = document.createElement("ul");
        lista.textContent = "No es posible registrar la denuncia: ";

        arreglo_mensaje_denuncia.forEach(element => {
            lista.appendChild(crear_li(element));
        });

        avisos_denuncia.appendChild(lista);

        return false;
        
    }
    if (usuario_operando.length > 0) {        
        
        const autor = usuario_operando[0].nombre;
        
        const nuevaDenuncia = {
            fecha: fecha,
            delito: delito,
            entidad: entidad,
            autor: autor,
        };
        
        denuncias.push(nuevaDenuncia);
        
        localStorage.setItem(coleccion_delitos, JSON.stringify(denuncias));
        
        const tarjeta = crearTarjetaDelito(nuevaDenuncia);
        divContenedorDelitos.appendChild(tarjeta);
        
        document.getElementById("denuncia_fecha").value = "";
        document.getElementById("denuncia_delito").value = "";
        document.getElementById("denuncia_entidad").value = "";



        alert("DENUNCIA REALIZADA CON EXITO!!!");

    } else {
        
        alert("Debes iniciar sesión para realizar una denuncia.");
    }
}
