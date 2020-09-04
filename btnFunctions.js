var score = 0;
var btnTempo = 0;
var intervalTime = 20;
var intervalCtrl = null;
var started = false;
document.getElementsByName("Sobre").disabled = true;
/*sizeWidth = window.innerWidth;
sizeHeight = window.innerHeight;*/

function btnMove(){
	btnStartFunction();
	var btnLeft = Math.floor(Math.random() * 1087)+104;
	var btnTop = Math.floor(Math.random() * 621);
	if(started){
		document.getElementById("clickBtn").style.left= btnLeft+"px";
		document.getElementById("clickBtn").style.top= btnTop+"px";
	}
}
function btnClickFunction(){
	if(started){
		score = score+1;
	}
	document.getElementById("pts").innerHTML = "Score: " + score;
	btnMove();
}
function btnStartFunction(){
	clearInterval(intervalCtrl);
	started = true;
	if(document.getElementById("easy").checked){
		btnTempo = 3000;
	}else if(document.getElementById("medium").checked){
		btnTempo = 2500;
	}else if(document.getElementById("hard").checked){
		btnTempo = 700;
	}else if(document.getElementById("impossible").checked){
		btnTempo = 300;
	}else{
		btnTempo = 4000;
	}
	intervalCtrl = setInterval(function(){ btnMove(); }, btnTempo);
}
function btnStopFunction(){
	started = false;
	score = 0;
	btnTempo = 0;
	intervalTime = 0;
	clearInterval(intervalCtrl);
	document.getElementById("clickBtn").style.left= 15+"px";
	document.getElementById("clickBtn").style.top= 110+"px";
	document.getElementById("pts").innerHTML = "Score: " + score;
	document.getElementById("time").innerHTML = "Time: " + intervalTime + "s";
}

/*
function timerFunction(){
	window.setTimeout(timerFunction, 1000);
	while(intervalTime >= 0){
		document.getElementById("time").innerHTML = "Time: " + intervalTime + "s";
		intervalTime = intervalTime - 1;
	}	
}

var intervalTime = null;
	for (var i = 20; i > 0; i--) {
		intervalTime = setInterval(function(){document.getElementById("time").innerHTML = "Time: " + score+i;}, 1000);
	}
*/
