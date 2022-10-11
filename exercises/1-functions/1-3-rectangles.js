"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawLine();

function drawLine() {

    context.fillStyle = "white";
    context.strokeStyle = "red";
    context.lineWidth = 1;
    context.beginPath();
    context.rect(50, 50, 100, 100);
    context.fill();
    context.stroke();

    context.fillStyle = "white";
    context.lineWidth = 1;
    context.beginPath();
    context.rect(150, 150, 100, 100);
    context.fill();
    context.stroke();
    
    context.fillStyle = "black";
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.beginPath();
    context.rect(100, 100, 100, 100);
    context.fill();
    context.stroke();

    context.fillStyle = "white";
    context.strokeStyle = "red";
    context.lineWidth = 1;
    context.beginPath();
    context.rect(200, 70, 30, 30);
    context.fill();
    context.stroke();

    context.fillStyle = "black";
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.beginPath();
    context.rect(232, 50, 20, 20);
    context.fill();
    context.stroke();

    context.fillStyle = "white";
    context.strokeStyle = "red";
    context.lineWidth = 1;
    context.beginPath();
    context.rect(70, 200, 30, 30);
    context.fill();
    context.stroke();

    context.fillStyle = "black";
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.beginPath();
    context.rect(50, 230, 20, 20);
    context.fill();
    context.stroke();



}