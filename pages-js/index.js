

function  generadorContenedorBancos (){

    volverAceroBancos();



    const contenedor_central_entidades = document.createElement("div");
    contenedor_central_entidades.classList.add("contenedor_central_entidades");

    const titulo = document.createElement("h2");
    titulo.textContent = "Entidades Bancarias";

    const label_usuario = document.createElement("label");
    label_usuario.textContent = "Ingrese su usuario";
    

    const input_usuario = document.createElement("input");
    input_usuario.textContent = "Ingrese su usuario";

    contenedor_central_entidades.appendChild(titulo);
    contenedor_central_entidades.appendChild(label_usuario);
    contenedor_central_entidades.appendChild(input_usuario);
    
    return contenedor_central_entidades;

}


function volverAceroBancos (){

    const contenedor = document.querySelectorAll(".div-formulario-registro");
    contenedor.forEach ((contenido) => {
        contenido.remove()
    });
}