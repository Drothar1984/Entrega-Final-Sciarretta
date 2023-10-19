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



function nuevaDenuncia() {
    
    let denunciaFecha = document.getElementById("fecha").value;
    let denunciaDelito = document.getElementById("delito").value;
    let denunciaEntidad = document.getElementById("entidad").value;

    const denuncia = new Denuncia(denunciaFecha, denunciaDelito, denunciaEntidad);

    denuncias.push(denuncia);

    localStorage.setItem(coleccion_delitos, JSON.stringify(denuncias));

    const entidadSeleccionada = entidades.find((e) => e.nombre === denunciaEntidad);

    if (entidadSeleccionada) {
        entidadSeleccionada.eventos += 1;
        localStorage.setItem(coleccion_bancos, JSON.stringify(entidades));
    }
}




