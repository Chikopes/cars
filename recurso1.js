window.onload = cargarImagen;

var i = 0;
var misImagenes = new Array(10);

function cargarImagen() {
  for (let i = 0; i < misImagenes.length; i++) {
    misImagenes[i] = `imagenes/${i + 1}.jpg`;
  }
  document.imgSrc.src = misImagenes[i];
}

function siguiente() {
  if (i >= 9) {
    i = misImagenes.length - 1;
    window.alert("Ultima imagen en la galeria");
  } else {
    i++;
  }
  document.imgSrc.src = misImagenes[i];
}

function anterior() {
  if (i < 1) {
    i = 0;
    window.alert("Primera imagen en la galeria");
  } else {
    i--;
  }
  document.imgSrc.src = misImagenes[i];
}