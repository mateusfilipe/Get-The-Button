var score = 0;
var btnStart = false;
var btnStop = false;
function btnMove(){
	document.getElementById("clickBtn").style.left= Math.floor(Math.random() * 1087)+200+"px";
	document.getElementById("clickBtn").style.top= Math.floor(Math.random() * 621)+"px";
}
function btnClickFunction(){
	score = score+1;
	btnMove();
	document.getElementById("pts").innerHTML = "Score: " + score;

}
function btnStopFunction(){
	score = 0;
	btnStop = true;
	document.getElementById("clickBtn").style.left= 15+"px";
	document.getElementById("clickBtn").style.top= 105+"px";
	document.getElementById("pts").innerHTML = "Score: " + score;
}
function btnStartFunction(){
	btnStart = true;	
}

function btnMoveTime(){
	for(var i = 0 ; i < 10000 ; i++){
		setTimeout(function(){btnMove()}, 500);
		
	}
}