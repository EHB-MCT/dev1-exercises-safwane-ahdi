"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

draw();

function draw() {
    context.strokeStyle = "white";
    context.fillStyle = "orange";
    context.lineWidth = 2;
    context.fillRect(0, 0, width, height);
    drawLines();
}

function drawLines(){
    let step = 10;
    let amount = width / step;
    let gap = height / step;
    for(let i = 0; i < amount; i++) {
        Utils.drawLine(step * i, 0, width - (step * i), height);
    }
    for(let i = 0; i < gap; i++) {
        Utils.drawLine(0, step * i, width, height - (step * i));
    }
}