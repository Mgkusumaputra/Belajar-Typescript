let age: number = 20;
if (age < 50)
    age += 10;
console.log(age);

//

let sales = 123_456_789;        /* If we have large number, we can separate its digits using an underscore. */
let course = "Typescript";
let is_published = true;
let level;                      /* If we declare a variable and dont initialize it, the typescript compiler assumes this variable is of type any */

function render(document) {
    console.log(document);      /* Implicity = we haven't explicity or clearly set the type of the parameter */
}


// Arrays

let numbers: number[] = [];
// numbers.forEach(n => n.)     /* Intellisense */