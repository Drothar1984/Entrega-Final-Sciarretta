

function nuevaDenuncia() {
    
    const fecha = document.getElementById("denuncia_fecha").value;
    const delito = document.getElementById("denuncia_delito").value;
    const entidad = document.getElementById("denuncia_entidad").value;
    
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
