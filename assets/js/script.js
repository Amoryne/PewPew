

let canvas = document.getElementById('mon_canvas');
let ctx = canvas.getContext('2d');
//--------------------------------------------
//Voile
ctx.beginPath();
ctx.moveTo(300,100);
ctx.lineTo(400,200);
ctx.lineTo(300,200)
ctx.closePath();

ctx.fillStyle="lightblue";
ctx.strokeStyle = "darkblue";
ctx.lineWidth=5;
ctx.stroke();
ctx.fill();

//Coque

ctx.beginPath();
ctx.moveTo(410,220);
ctx.lineTo(380,250);
ctx.lineTo(250,250);
ctx.lineTo(220,220);

ctx.fillStyle="peru";
ctx.strokeStyle = "brown";
ctx.lineWidth=5;
ctx.lineCap = "mitter";
ctx.Join = "round";
ctx.stroke();
ctx.fill();

//mât
ctx.beginPath();
ctx.moveTo(280,220);
ctx.lineTo(280,80);
ctx.lineTo(285,80);
ctx.lineTo(285,220);

ctx.fillStyle="peru";
ctx.strokeStyle = "brown";
ctx.lineWidth=3;
ctx.stroke();
ctx.fill();
ctx.fillStyle = "red";

//rectangle
ctx.fillRect(30,300,100,60)
ctx.fillStyle = "pink";
ctx.fillRect(40,310,80,40);

//Cercle
ctx.beginPath();
ctx.arc(500,300, 80,0,Math.PI*2,true);
ctx.fill();

//Courbes

ctx.beginPath();              
ctx.lineWidth="3";
ctx.strokeStyle="black"; 
ctx.moveTo(50,50);
ctx.bezierCurveTo(300,100,100,300,300,300);
ctx.stroke();


var gradient = ctx.createLinearGradient(20,20,50,50);
gradient.addColorStop(0,"blue");     // Départ
gradient.addColorStop(0.8,"yellow"); // Intermédiaire
gradient.addColorStop(1,"green");    // Arrivée
ctx.fillStyle = gradient;   

ctx.fillRect(20,20,50,50);


//image

var image = new Image();
image.src = 'assets/js/image.png';
image.onload = function(){
var motif = ctx.createPattern( this, 'repeat' );
ctx.fillStyle = motif;
  ctx.fillRect( 50, 200, 100,100 );
};

//text
var text = 'Hello kiwi!';
ctx.font = "20pt Verdana";
ctx.textAlign = "left";
ctx.textBaseline = "top";

var textPxLength = ctx.measureText(text);
ctx.fillStyle = "red";
ctx.fillText(text,100,50);
ctx.fillStyle = "darkorange";
ctx.fillText("width: "+Math.round(textPxLength.width)+"px",25,300);


ctx.font = "30pt Verdana";
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 5;
ctx.shadowColor = 'orange';
ctx.fillStyle = 'olive';
ctx.fillText("Hello Kiwi!", 40, 60);
ctx.beginPath();
ctx.strokeStyle = 'skyblue';
ctx.shadowColor = 'grey';
ctx.lineWidth = 10;
ctx.arc(150,70,60,0,Math.PI,false);
ctx.stroke();




