<button id="clear" onclick="clearRect();">Clear</button>
<br>
<body onmousedown="mdown();" onmouseUp="mup();">

<canvas id="canvas1" width="500px" height="375px" 
onMouseMove="move(this);" onmousedown="mdown();" onmouseUp="mup();" 
onmouseOut="mout();" onmouseover="mover1();"></canvas>
<br>
<img id='canvasImg' width="500px" height="375px">

<script src="js/draw-script.js"></script>
<link href="css/draw-style.css" rel="stylesheet" type="text/css" media="screen"/>


