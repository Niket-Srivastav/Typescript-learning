let My_name:string = "Niket";

let newname  =  My_name.toUpperCase();

console.log(newname);

let age:number = 24;

age = 25.5 
age++;

console.log(age)

// other datatypes - 
// - boolean
// - array 

let arr:string[];
let arr1:Array<string>;

arr = ["a","b","c"];

let result = arr.filter((x) => x === 'a');

console.log(result)


// enum

const enum Color{ //const will remove the the enum code from the js file
  Red,
  Green,
  Blue
}

let c:Color = Color.Green;

// tuple

let swapNumbs: [firstnum:number, secondnum:number];

swapNumbs = [10,20];

// any

