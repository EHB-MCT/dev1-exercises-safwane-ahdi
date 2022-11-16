"use strict";

let x = 5

function one() {
    x = 10;
}

function two() {
    x = 2;
}

one();
two();
one();
console.log(x);
two();
console.log(x);
