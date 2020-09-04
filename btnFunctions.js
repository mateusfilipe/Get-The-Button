var score = 0;
var btnTempo = 0;
var intervalTime = 0;
var timeCtrlHandle = null;
var intervalCtrl = null;
var timeCtrl = null;
var started = false;
var myTimer = document.getElementById("time");

document.getElementsByName("Sobre").disabled = true;
/*sizeWidth = window.innerWidth;
sizeHeight = window.innerHeight;*/

function btnMove(){
	clearInterval(intervalCtrl);
	intervalCtrl = setInterval(function(){ btnMove(); }, btnTempo);
	var btnLeft = Math.floor(Math.random() * 1207)+104;
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
	if(score < 10){
		document.getElementById("pts").innerHTML = "Score:0" + score;
	}else{
		document.getElementById("pts").innerHTML = "Score:" + score;
	}
	btnMove();
}
function btnStartFunction(){
	document.getElementById("clickBtn").style.pointerEvents = 'auto';
	intervalTime = 20;
	score = 0;
	timerFunction();
	clearInterval(intervalCtrl);
	started = true;
	if(document.getElementById("easy").checked){
		btnTempo = 3000;
	}else if(document.getElementById("medium").checked){
		btnTempo = 2500;
	}else if(document.getElementById("hard").checked){
		btnTempo = 700;
	}else if(document.getElementById("impossible").checked){
		btnTempo = 400;
	}else{
		btnTempo = 4000;
	}
	intervalCtrl = setInterval(function(){ btnMove(); }, btnTempo);
}
function btnStopFunction(){
	started = false;
	btnTempo = 0;
	intervalTime = 20;
	clearInterval(intervalCtrl);
	clearTimeout(timeCtrlHandle);
	document.getElementById("clickBtn").style.left= 655.5+"px";
	document.getElementById("clickBtn").style.top= 310.5+"px";
	document.getElementById("pts").innerHTML = "Score:" + score;
	document.getElementById("time").innerHTML = "Time: " + intervalTime + "s";
	document.getElementById("pts").style.visibility= "hidden";
	myTimer.style.color = "white";
}


function timerFunction(){
	if(intervalTime < 10){
		myTimer.innerHTML = "Time: 0" + intervalTime + "s";
		myTimer.style.color = "red";
	}else{
		myTimer.innerHTML = "Time: " + intervalTime + "s";
		myTimer.style.color = "white";
	}

	if(intervalTime <= 0){
		document.getElementById("clickBtn").style.left = 655.5+"px";
		document.getElementById("clickBtn").style.top = 310.5+"px";
		document.getElementById("clickBtn").style.pointerEvents = 'none';
		document.getElementById("pts").style.visibility = "visible";
		return;
	}
	intervalTime = intervalTime - 1;
	timeCtrlHandle = window.setTimeout(timerFunction, 1000);
}

var speed = 2000; 
var t = setInterval(function(){
  var slideSource = document.getElementById('pts');
  slideSource.classList.toggle('fade');
}, speed);