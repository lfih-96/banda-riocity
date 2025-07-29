const textoOriginal = "Danny y Jhonnatan";
const elemento = document.querySelector('.nombre-banda');
let indice = 0;

elemento.textContent = ''; // Limpia el texto inicialmente

function escribir() {
  if (indice <= textoOriginal.length) {
    elemento.textContent = textoOriginal.substring(0, indice);
    indice++;
    setTimeout(escribir, 250);
  }
}

escribir();
