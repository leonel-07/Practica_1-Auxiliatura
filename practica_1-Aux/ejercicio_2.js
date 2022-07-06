/* Realiza un script que pida números hasta que
se pulse “cancelar”. Si no es un número deberá
indicarse con un «alert» y seguir pidiendo. 
Al salir con “cancelar” deberá indicarse 
la suma total de los números introducidos.*/
let resultado = 0;
do {
    let numero = prompt("Introduce un numero");
        resultado = resultado + Number(numero);
} while (confirm("Desea seguir?"));
document.write(resultado);