var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");

canvasContext.font = "32px Arial";
canvasContext.fillText("Canvas", 10, 50);

canvasContext.strokeText("Canvas", 10, 90);

var gradient1 = canvasContext.createLinearGradient(0, 0, 150, 100);
gradient1.addColorStop(0, "rgb(29, 0, 128)");
gradient1.addColorStop(1, "rgb(255, 173, 13)");
canvasContext.fillStyle = gradient1;
canvasContext.fillText("Canvas", 10, 130);

canvasContext.shadowColor = "rgb(190, 190, 190)";
canvasContext.shadowOffsetX = 10;
canvasContext.shadowOffsetY = 10;
canvasContext.shadowBlur = 10;
var gradient2 = canvasContext.createLinearGradient(0, 0, 150, 100);
gradient2.addColorStop(0.7, "pink");
gradient2.addColorStop(1, "black");
canvasContext.fillStyle = gradient2;
canvasContext.fillText("Canvas", 10, 170);


var NameCanvas = document.getElementById("name");
var NameContext = NameCanvas.getContext("2d");
var gradient3 = NameContext.createLinearGradient(0, 0, NameCanvas.width, 0);
gradient3.addColorStop("0", "orange");
gradient3.addColorStop("0.5", "black");
gradient3.addColorStop("1.0", "yellow");
NameContext.font = "36px Arial";
NameContext.fillStyle = gradient3;
NameContext.fillText("Asia", 10, 50);
NameContext.setLineDash([4, 16]);
NameContext.strokeText("Asia", 10, 50);
NameContext.rect(1, 10, 90, 50);
NameContext.stroke();