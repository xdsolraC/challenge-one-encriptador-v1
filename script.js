const input = document.querySelector(".texto");

const rectangle = document.querySelector(".rectangle");

const mensaje = document.querySelector(".mensaje");

const mensajeDefault = document.querySelector(".mensaje-default");

const copiarBtn = document.querySelector(".copiar-btn");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

let matrizCodigo = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

// Función para ocultar elementos
function ocultar(elemento) {
  elemento.style.display = "none";
}

// Ocultar algunos elementos
ocultar(mensaje);
ocultar(copiarBtn);

// Función para mostrar elementos
function mostrar(elemento) {
  elemento.style.display = "";
}

// Encriptar
function encriptarBtn() {
  ocultar(mensajeDefault);
  mostrar(mensaje);
  mostrar(copiarBtn);
  rectangle.style.justifyContent = "space-between";
  rectangle.style.paddingTop = "32px";
  rectangle.style.paddingBottom = "32px";
  mensaje.value = encriptar(input.value);
  input.value = "";
}

function encriptar(stringEncriptada) {
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

// Desencriptar
function desencriptarBtn() {
  ocultar(mensajeDefault);
  mostrar(mensaje);
  mostrar(copiarBtn);
  rectangle.style.justifyContent = "space-between";
  rectangle.style.paddingTop = "32px";
  rectangle.style.paddingBottom = "32px";
  mensaje.value = desencriptar(input.value);
  input.value = "";
}

function desencriptar(stringDesencriptada) {
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
        stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

// Copiar

function copiar() {
  navigator.clipboard.writeText(mensaje.value);
}
