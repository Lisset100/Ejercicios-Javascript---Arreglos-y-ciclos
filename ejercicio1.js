// Ejercicio 1
// Complete the function to print out the string: This is a sentence.

let arr = ["This", "is", "a", "sentence."];
//Con join
function printOutString() {
  return arr.join(" ");
}
console.log(printOutString());

//Con arrowfunction
const printOutString2 = () => arr.join(" ");
console.log(printOutString2());

// con ciclo for
function printOutString3() {
  let resultado = "";
  for (let i = 0; i < arr.length; i++) {
    resultado += arr[i] + " ";
  }
  return resultado;
}

console.log(printOutString3());
