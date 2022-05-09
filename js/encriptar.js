
function encriptar() {
    let texto = document.querySelector(".centro").value;
    let textoCifrado = texto.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
    document.querySelector(".lateral").value = textoCifrado;
    controlLateral();
    document.querySelector(".centro").value = '';
};

let boton1 = document.querySelector("#encriptar"); 
boton1.onclick = encriptar;


let imagLat = document.querySelector(".img-lat");
let textolat1 = document.querySelector("#lat1");
let textolat2 = document.querySelector("#lat2");

function controlLateral(){
    let textolat = document.querySelector(".lateral").value;
    if(textolat != ""){
        textolat1.classList.add("invisible");
        textolat2.classList.add("invisible");
        imagLat.classList.add("invisible");
    } else{
        textolat1.classList.remove("invisible");
        textolat2.classList.remove("invisible");
        imagLat.classList.remove("invisible");
    }
}


