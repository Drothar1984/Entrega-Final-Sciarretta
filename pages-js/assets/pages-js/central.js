

//funcion para generar contenedor principal de ingreso
function  generadorContenedorCentral (){

    fetch("https://api.estadisticasbcra.com/efectivo_en_ent_fin", {
        headers: {
          Authorization:
            "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjkyMTgxODIsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJnYWJyaWVsYXJpbzE5NzdAZ21haWwuY29tIn0.NZqV9wc2zvDAonPdiaYsFvC95V8a-v7F9SU_HIGBYRioAGLQwMLtaST6eTcKHCrztsLJM0hkhnSiazyEtgAReQ",
        },
      })
      //promesas
      .then((response) => response.json())
      .then((data) => {

      const dataBank = document.createElement("div");
      dataBank.classList.add("contenedor_secundario");
      dataBank.id = "dataBank";

    //recorremos en busqueda de la informacion en cuesiton
    data.forEach((info) => {
        //creamos un div
        const content = document.createElement("div")        
        
        //guardamos la info 
        content.innerHTML = `
            <h4> al me : ${info.d} la inflacion oficial es de ${info.v}<h4>
            `
        //agregamos el contenido al contenedor
        dataBank.append(content)

    });

    //contenedor principal
    const contenedorPrincipal = document.createElement("div");
    contenedorPrincipal.classList.add("contenedor_central_secundario");
    contenedorPrincipal.id = "contenedorPrincipal";

    //titulo de la plantilla
    const titulo = document.createElement("h1");
    titulo.textContent = "Banco Central Inflacion Mensual";    

    //contenedor botones
    const ctnAccDenuncia = document.createElement("div")
    ctnAccDenuncia.classList.add ("ctnAccBanco")

    //boton "Cancelar"
    const btnCancelar = document.createElement("button");
    btnCancelar.textContent = "Volver al menu principal";
    btnCancelar.classList.add("btnVolverMenu");
    btnCancelar.id = "btnCancelar";

    //agregando al div contenedor

    //TITULO
    contenedorPrincipal.appendChild(titulo);

    //BANCOS
    contenedorPrincipal.appendChild(dataBank);
    contenedorPrincipal.appendChild(ctnAccDenuncia);
    ctnAccDenuncia.appendChild(btnCancelar);    

    //el div lo agregamos
    document.getElementById("registro-principal").appendChild(contenedorPrincipal);

    })

}
