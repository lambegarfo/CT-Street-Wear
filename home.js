import fotos from "./fotos.json" assert {type: 'json'};

const arrayfotos = fotos;
let divFotos = document.getElementById('foto1');

divFotos.style.backgroundImage = "url($(arrayfotos.fotosGiovana.foto1))";
divFotos.style.backgroundSize = "cover";

console.log(arrayfotos.fotosGiovana.foto1);
