"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawLine();

function drawLine() {

    //CROSS

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(150, 150);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(50, 150);
    context.lineTo(150, 50);
    context.stroke();

    //EDGES

    context.lineWidth = 5;
    context.strokeStyle = 'black';
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(50, 150);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'black';
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(150, 50);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'black';
    context.beginPath();
    context.moveTo(150, 50);
    context.lineTo(150, 150);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'black';
    context.beginPath();
    context.moveTo(150, 150);
    context.lineTo(50, 150);
    context.stroke();

}