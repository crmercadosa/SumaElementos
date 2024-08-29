//Suma de elementos de un arreglo: Crea un arreglo de números y calcula la suma de todos sus elementos.

function sumarElementos (arreglo) {
    let suma = 0 ;
    for (let i = 0; i < arreglo.length; i++) {
         suma += arreglo[i];
    }
    console.log(suma);
}

sumarElementos([1, 2, 3, 4]);