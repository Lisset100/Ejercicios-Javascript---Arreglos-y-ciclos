
// Ejercicio 5
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// Para imprimir las personas de la lista es muy simple con el console.log
console.log(people);

// Para eliminar a Dani de la matriz podemos usar splice
people.splice(people.indexOf("Dani"), 1);

//  Igualmente con Juan
people.splice(people.indexOf("Juan"), 1);

// Para mover a Luis al frente de la matrizlo más fácil es usar unshift
let luis = people.splice(people.indexOf("Luis"), 1)[0];
people.unshift(luis);

// Agregar mi nombre al final de la matriz el método corrspondient es push
people.push("Lisset");

// Para iterar con un bucle e imprimir Maria y luego salir es haciendo el uso de breack ya que este interrumpe el ciclo y sale.
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Maria") break;
}

// Para obtener el índice donde se encuentra Maria usamos indexOf
console.log(people.indexOf("Maria"));

// En concole.log final podemos verificar que nos quedaron 4 elementos
console.log(people);
