function calcularAños(fecha) {
    var hoy = new Date();
    var puntoTiempo = new Date(fecha);
    var edad = hoy.getFullYear() - puntoTiempo.getFullYear();
    var m = hoy.getMonth() - puntoTiempo.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < puntoTiempo.getDate())) {
        edad--;
    }

    return edad;
}