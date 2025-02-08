

// Ejercicio 4
// (sugerencia filter() e include())
// Cree un programa que recorra las 2 matrices; si hay cursos en común, imprímalos en la consola.
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function cursosEnComun(arr1, arr2) {
  let cursosComunes = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      cursosComunes.push(arr1[i]);
    }
  }
  return cursosComunes;
}
console.log(cursosEnComun(student1Courses, student2Courses));
// Con filter
function cursosEnComun2(arr1, arr2) {
  return arr1.filter((curso) => arr2.includes(curso));
}
console.log(cursosEnComun2(student1Courses, student2Courses));
// o más corto
const cursosEnComun3 = (arr1, arr2) => arr1.filter((curso) => arr2.includes(curso));
console.log(cursosEnComun3(student1Courses, student2Courses));
