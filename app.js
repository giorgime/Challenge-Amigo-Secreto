// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Capturar el valor del campo de entrada//
function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
       //Validar entrada: Alert con un mensaje de error: "Por favor, inserte un nombre."//
       alert("Por favor, inserte un nombre.");
    } else {
        //Actualizar el array de amigos//
        amigos.push (amigo);
        //Limpiar el campo de entrada: Después de añadir el nombre//
        limpiarCampo();
        mostrarLista()
    }
}

agregarAmigo();

function limpiarCampo() {
    let vacio = document.querySelector('#amigo');
    vacio.value = '';
}
//Muestra la lista de amigos ingresados//
function mostrarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    //Valida amigos disponibles, genera numero indice aleatorio y luego obtiene el nombre sorteado//
    if (amigos.length === 0) {
    }else{    
        let indiceAleatorio = Math.floor(Math.random()*amigos.length);
        let nombreSorteado = amigos[indiceAleatorio];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo secreto es: ${nombreSorteado}`;
    }
}

