
var mouseX1;
var mouseY1;
var begin=false;
var mousePos;

var mouseout=true;
var mouseup=true;

function toImage(){
var canvas=document.getElementById("canvas1");
// save canvas image as data url (png format by default)
      var dataURL = canvas.toDataURL();
      document.getElementById('canvasImg').src = dataURL;
 }

function clearRect(){
var canvas1= document.getElementById("canvas1");
var cntx3=canvas1.getContext('2d');
cntx3.clearRect(0, 0, canvas1.width, canvas1.height);
cntx3.closePath();
//clear the image
document.getElementById('canvasImg').src = '0.png';
}

function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }
      

//


function mup(){
mouseup=true;
toImage();
checkbegin();
}
function mdown(){
mouseup=false;
checkbegin();
}
function mout(){
mouseout=true;
checkbegin();
}
function mover1(){
mouseout=false;
checkbegin();
}
//
function checkbegin(){
if(!mouseup && !mouseout) {
	begin=true;
mouseX1=mousePos.x;
mouseY1=mousePos.y;
}else{begin=false;}
}

function move(canvas){

canvas.addEventListener('mousemove', function(evt) {

        mousePos = getMousePos(canvas, evt);
        //var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        
        //writeMessage(canvas, message);
      }, false);


var cntx=canvas.getContext('2d');
//var rect3 = getMousePos(canvas,evt);

if(begin){
cntx.beginPath();

mouseX=mousePos.x;
mouseY=mousePos.y;

//cntx.arc(20, 10, 2, 0, 2 * Math.PI, true);
cntx.arc(mouseX, mouseY, 3, 0, 2 * Math.PI, true);

cntx.fill();
drawline(cntx,mouseX,mouseY);
mouseX1=mouseX;
mouseY1=mouseY;
}else{
cntx.closePath();

}
}

function drawline(ctx,mouseX,mouseY){
if(begin){
ctx.beginPath();
ctx.moveTo(mouseX1,mouseY1);
ctx.lineTo(mouseX,mouseY);
ctx.lineWidth=6;
ctx.stroke();
}else{
ctx.closePath();

}
}

