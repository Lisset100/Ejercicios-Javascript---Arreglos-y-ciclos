// Ejercicio 2
// Escriba una función que: Tome una matriz de números. Duplique el valor de cada número de la matriz.
// Imprima la nueva matriz actualizada.

let arrayNumeros = [1, 2, 4, 5]

function numerosDobles(arr) {
  let nuevoArray = [];
  for (let i = 0; i < arr.length; i++) {
    nuevoArray.push(arr[i] * 2);
  }
  return nuevoArray;
}

console.log(numerosDobles(arrayNumeros));


// Con map
function numerosDobles2(arr) {
  return arr.map((num) => num * 2);
}
console.log(numerosDobles2(arrayNumeros));

// o dejádolo más corto
const numerosDobles3 = (arr) => arr.map((num) => num * 2);
console.log(numerosDobles3(arrayNumeros));
