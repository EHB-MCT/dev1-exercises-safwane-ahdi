"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


draw();
drawLines();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white   ";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawLines();
}

function drawLines() {
    let i = 25;
    while (i < 300) {
        Utils.drawLine(75, i + 50, 325, i + 50);
        i = i + 25;
    }
}
