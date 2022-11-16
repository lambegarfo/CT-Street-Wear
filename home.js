import fotos from "./fotos.json" assert {type: 'json'};

const arrayfotos = fotos.fotosGiovana;
const divFotos = document.getElementById('foto1');


    var i = 0;

    const foto = Object.values(arrayfotos)[i];
    divFotos.style.backgroundImage = "url(" + foto + ")";
    divFotos.style.backgroundSize = "cover";
    divFotos.style.backgroundPosition = "center center";


        