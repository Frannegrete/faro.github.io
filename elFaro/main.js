const miFormulario = document.getElementById("miFormulario");
const miLista = document.getElementById("miLista");

miFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const descripcion = document.getElementById("descripcion").value;

  const nuevoElemento = document.createElement("li");
  const nuevoContenido = document.createTextNode(titulo + " - " + descripcion);
  nuevoElemento.appendChild(nuevoContenido);
  miLista.appendChild(nuevoElemento);

  miFormulario.reset();
});

const noticias = document.querySelector('.noticias');
const divs = noticias.querySelectorAll('div');
let contadorNegocios = 0;

divs.forEach(div => {
    const categoria = div.querySelector('p').textContent;
    if (categoria === 'Categoría: Negocios') {
    contadorNegocios++;
}
});
document.write(`Total noticias de negocios: ${contadorNegocios}`);

const noticias = document.querySelector('.negocios');
const divs = noticias.querySelectorAll('div');
let contadorDeportes = 0;

divs.forEach(div => {
    const categoria = div.querySelector('p').textContent;
    if (categoria === 'Categoría: Deporte') {
    contadorDeportes++;
}
});

document.write(`Total noticias de deportes: ${contadorDeportes}`);

const noticias = document.querySelector('.noticias');
const divs = noticias.querySelectorAll('div');
let contadorGenerales = 0;

divs.forEach(div => {
    const categoria = div.querySelector('p').textContent;
    if (categoria === 'Categoría: Generales') {
    contadorGenerales++;
}
});
document.write(`Total noticias generales: ${contadorGenerales}`);



const divs = noticias.querySelectorAll('div');
let contadorNegocios = 0;
let contadorDeportes = 0;
let contadorGenerales = 0;
let contadorTotal = 0;

divs.forEach(div => {
    const categoria = div.querySelector('p').textContent;
    if (categoria === 'Categoría: Negocios') {
        contadorNegocios++;
        contadorTotal++;
    } else if (categoria === 'Categoría: Deporte') {
        contadorDeportes++;
        contadorTotal++;
    } else if (categoria === 'Categoría: Generales') {
        contadorGenerales++;
        contadorTotal++;
    }
});

const totalNoticiasElement = document.getElementById('total-noticias');
totalNoticiasElement.innerHTML = `Total de noticias publicadas: ${contadorTotal}`;