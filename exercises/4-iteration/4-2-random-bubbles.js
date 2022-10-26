"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


draw();

function draw() {
    context.strokeStyle = "white";
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    drawBubbles();
}

function randomColor () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    console.log(r, g, b);
    let color ="rgb(" + r + "," + g + "," + b + ")";
    return color;
}


function drawBubbles(){
    let radius = 75;    
    let margin = 400;
    let offset = 200;
    for (let i = 0; i < 40; i++) {
        console.log(i);
        context.fillStyle = randomColor();
        Utils.drawCircle((Math.random()* (width - margin)) + offset, (Math.random()* (height - margin)) + offset, radius * Math.random());
    }
}