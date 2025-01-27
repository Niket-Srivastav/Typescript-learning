"use strict";
let My_name = "Niket";
let newname = My_name.toUpperCase();
console.log(newname);
let age = 24;
age = 25.5;
age++;
console.log(age);
// other datatypes - 
// - boolean
// - array 
let arr;
let arr1;
arr = ["a", "b", "c"];
let result = arr.filter((x) => x === 'a');
console.log(result);
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
