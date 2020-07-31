var score = 0;
var btnWait = false;
const btnConst = true;
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
	btnWait = false;
	document.getElementById("clickBtn").style.left= 15+"px";
	document.getElementById("clickBtn").style.top= 105+"px";
	document.getElementById("pts").innerHTML = "Score: " + score;
}
function btnStartFunction(){
	btnWait = true;
	btnMoveTime();
}

function btnMoveTime(){
	while(btnConst){
		setTimeout(function(){btnMove()}, 500);
		if(score = 5){
			break;
		}
	}
}