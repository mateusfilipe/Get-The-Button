var score = 0;
function btnClickFunction(){
	score = score+1;
	document.getElementById("clickBtn").style.left= Math.floor(Math.random() * 1087)+200+"px";
	document.getElementById("clickBtn").style.top= Math.floor(Math.random() * 621)+"px";
	document.getElementById("pts").innerHTML = "Score: " + score;

}
function btnStopFunction(){
	score = 0;
	document.getElementById("clickBtn").style.left= 15+"px";
	document.getElementById("clickBtn").style.top= 105+"px";
	document.getElementById("pts").innerHTML = "Score: " + score;
}
function btnStartFunction(){
	document.getElementById("clickBtn").style.left= Math.floor(Math.random() * 1087)+200+"px";
	document.getElementById("clickBtn").style.top= Math.floor(Math.random() * 621)+"px";
}