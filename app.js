let datos = []; // Aquí se almacenarán los datos

function agregarAmigo() {
    const input = document.getElementById("dato");
    const amigo = input.value;

    if (amigo.trim() !== "") {
        datos.push(amigo); // Guarda el dato en el array
       console.log(datos);
        input.value = ""; // Limpia el input
         actualizarLista();
    }
    else{
       alert("Por favor escribe un nombre válido."); 

    }
}

function actualizarLista() {
        const lista = document.getElementById("listaAmigos");
        lista.innerHTML = ""; // Limpia la lista antes de actualizar

        datos.forEach((amigo) => {
            const li = document.createElement("li");
            /////////////// si depronto tengo que limitarlo ////
            li.textContent = `${amigo}`;
            lista.appendChild(li);
        });
    }

    function sortearAmigo() {
        const resultado = document.getElementById("resultado");
        if (datos.length <= 1) {
            alert("No hay suficientes amigos para realizar el sorteo.");
            return;
        }

        const indice = Math.floor(Math.random() * datos.length);
        const nombre = datos[indice];
        resultado.textContent = `Nombre seleccionado: ${nombre}`;
    }