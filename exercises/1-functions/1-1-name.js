"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawLine();

function drawLine() {

    // LETTER S

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(20, 70);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(20, 70);
    context.lineTo(50, 90);
    context.stroke();
    
    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(50, 90);
    context.lineTo(20, 110);
    context.stroke();

    //LETTER A

    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(80, 70);
    context.lineTo(60, 90);
    context.stroke();
    
    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(70, 110);
    context.lineTo(60, 90);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(70, 110);
    context.lineTo(80, 90);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(80, 70);
    context.lineTo(80, 110);
    context.stroke();

    //LETTER F

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(105, 60);
    context.lineTo(105, 110);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(105, 60);
    context.lineTo(120, 60);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(90, 80);
    context.lineTo(120, 80);
    context.stroke();

    //LETTER W

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(135, 70);
    context.lineTo(145, 110);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(155, 85);
    context.lineTo(145, 110);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(170, 110);
    context.lineTo(155, 85);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(170, 110);
    context.lineTo(180, 70);
    context.stroke();

    //LETTER A

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(210, 70);
    context.lineTo(190, 90);
    context.stroke();
    
    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(200, 110);
    context.lineTo(190, 90);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(200, 110);
    context.lineTo(210, 90);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(210, 70);
    context.lineTo(210, 110);
    context.stroke();

    //LETTER N

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(230, 70);
    context.lineTo(230, 110);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(230, 85);
    context.lineTo(250, 70);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(250, 70);
    context.lineTo(250, 110);
    context.stroke();

    //LETTER E

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(265, 85);
    context.lineTo(280, 70);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(280, 70);
    context.lineTo(295, 85);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(265, 85);
    context.lineTo(295, 85);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(265, 85);
    context.lineTo(280, 110);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(265, 85);
    context.lineTo(280, 110);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(295, 95);
    context.lineTo(280, 110);
    context.stroke();
    

}