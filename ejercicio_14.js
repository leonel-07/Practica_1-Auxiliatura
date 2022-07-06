function contarVC(palabra) {
    let contV = 0;
    let contC = 0;
    let tamaño = letra.length;
    for (let i = 0; i<tamaño; i++){
        if(palabra.charAt(j) == "a" || palabra.charAt(j) == "e" || 
        palabra.charAt(j) == "i"  || palabra.charAt(j) == "o" || palabra.charAt(j) == "u" ){
              contV = contV+1;
        }
        else {
            contC = contC +1;
        }
    }
    return (`hay ${contV} vocales y ${contC} consonantes`);
}