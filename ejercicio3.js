





// Ejercicio 3
// (sugerencia reduce()) Escribe un programa para calcular la suma y el producto (multiplicación) de una matriz de números. Imprime la suma y el producto.
// Ejemplo: Dado un arreglo [1, 2, 3, 4] La suma es 10. El producto es 24.
let arrayNumeros2 = [1, 2, 3, 4];

// Con ciclo for
function sumaYProducto(arr) {
  let suma = 0;
  let producto = 1;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
    producto *= arr[i];
  }
  console.log(`La suma es ${suma}. El producto es ${producto}.`);
};
sumaYProducto(arrayNumeros2);

// Con reduce
function sumaYProducto2(arr) {
  let suma = arr.reduce((acc, num) => acc + num, 0);
  let producto = arr.reduce((acc, num) => acc * num, 1);
  console.log(`La suma es ${suma}. El producto es ${producto}.`);
};
sumaYProducto2(arrayNumeros2);