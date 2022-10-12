"use strict";
let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

/*
let size = 400;
let randomX = Math.floor(Math.random() * (width - size));
let randomY = Math.floor(Math.random() * (height - size));

let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
console.log(r, g, b);
let color ="rgb(" + r + "," + g + "," + b + ")";

context.fillStyle = color;
context.fillRect(randomX, randomY, size, size);
*/

let size = 500;
let positionX = 100;
let positionY = 100;

function randomColor () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    console.log(r, g, b);
    let color ="rgb(" + r + "," + g + "," + b + ")";
    return color;
}

function drawRect(){
    context.fillStyle = randomColor();
    context.fillRect(positionX, positionY, size, size);
    changeSizeRect();
}

function changeSizeRect(){
    positionX = positionX + 25;
    positionY = positionY + 25;
    size = size - 50;
}

drawRect();
drawRect();
drawRect();
drawRect();
drawRect();
drawRect();
drawRect();
drawRect();
drawRect();
drawRect();
drawRect();