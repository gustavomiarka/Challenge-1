
function descifrar(){
    let texto = document.querySelector(".centro").value;
    let textoDecifrado = texto.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
    document.querySelector(".lateral").value = textoDecifrado;
    controlLateral();
    document.querySelector(".centro").value = '';
}

let boton2 = document.querySelector("#desencriptar"); 
boton2.onclick = descifrar;
