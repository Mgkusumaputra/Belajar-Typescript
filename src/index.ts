let age: number = 20;
if (age < 50)
    age += 10;
console.log(age);

//

let sales = 123_456_789;        /* If we have large number, we can separate its digits using an underscore. */
let course = "Typescript";
let is_published = true;
let level;                      /* If we declare a variable and dont initialize it, the typescript compiler assumes this variable is of type any */

// function render(document) {
//     console.log(document);      /* Implicity = we haven't explicity or clearly set the type of the parameter */
// }


// Arrays

let numbers: number[] = [];
// numbers.forEach(n => n.)     /* Intellisense */



// Tuples

 // 1, 'Mosh'
let user: [number, string, boolean, number] = [1, "Mosh", true, 0];



// Enums

// const small = 1;
// const medium = 2;
// const large = 3;        /* Not using enum */

/* enum using PascalCase */
const enum Size { Small = 1, Medium, Large }      /* By default first member value will be set to 0. If we define the value with string, we must set a value for each member.*/
let mySize: Size = Size.Medium;
console.log(mySize);        /* if we define enum using const compiler will generated more optimize code  */



// Functions

function calculateTax(income: number, taxYear = 2022): number {         /* Always properly annotate functions */
    if (taxYear < 2022) 
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000);



// Type Aliases

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

// Objects (Connect To "Type Aiases")

let employee: Employee = { 
    id: 1, 
    name: "Mosh",
    retire: (date: Date) => {
        console.log(date);
    }
};            // Cannot define name with null or undefined. Set it to optional or use empty string



// Union Types

function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight ===  "number") 
        return weight * 2.2;
    else 
        return parseInt(weight) * 2.2;
}

kgToLbs(20);
kgToLbs('20kg');



// Intersection Types

type Draggable = {
    drag: () => void;
};

type Resizable = {
    resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}