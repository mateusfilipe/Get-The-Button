var score = 0;
var btnTempo = 0;
var intervalCtrl = null;
var started = false;
document.getElementsByName("Sobre").disabled = true;

/*sizeWidth = window.innerWidth;
sizeHeight = window.innerHeight;*/

function btnMove(){
	btnStartFunction();
	var btnLeft = Math.floor(Math.random() * 1087)+100;
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
	clearInterval(intervalCtrl);
	score = 0;
	btnTempo = 0;
	document.getElementById("clickBtn").style.left= 15+"px";
	document.getElementById("clickBtn").style.top= 110+"px";
	document.getElementById("pts").innerHTML = "Score: " + score;
}
