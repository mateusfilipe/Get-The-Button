var score = 0;
var btnTempo = 0;
function btnMove(){
	var btnLeft = Math.floor(Math.random() * 1087)+200;
	var btnTop = Math.floor(Math.random() * 621);
	document.getElementById("clickBtn").style.left= btnLeft+"px";
	document.getElementById("clickBtn").style.top= btnTop+"px";
}
function btnClickFunction(){
	/*antes = Date.now();
	duracao = (Date.now()-antes)/1000;*/
	score = score+1;
	document.getElementById("pts").innerHTML = "Score: " + score;
	btnMove();

}
function btnStopFunction(){
	score = 0;
	document.getElementById("clickBtn").style.left= 15+"px";
	document.getElementById("clickBtn").style.top= 105+"px";
	document.getElementById("pts").innerHTML = "Score: " + score;
	//document.getElementById("time").innerHTML = "Time: " + duracao;
}

function btnStartFunction(){
	if(document.getElementById("easy").checked){
		btnTempo = 3000;
	}else if(document.getElementById("medium").checked){
		btnTempo = 2500;
	}else if(document.getElementById("hard").checked){
		btnTempo = 1500;
	}else if(document.getElementById("impossible").checked){
		btnTempo = 300;
	}else{
		btnTempo = 4000;
	}
	setInterval(function(){ btnMove(); }, btnTempo);
}

/*function btnWaitMove(){
	//code before the pause
	setTimeout(function(){
	    btnMove();
	}, 100);
}*/