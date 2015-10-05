// NameSpace
//var GAME = GAME || {};

function Character(){
    this.pos = {x:100, y:100};
}

Character.prototype.move = function(direction){
    if(direction == 'left') this.pos.x -= 1;
    if(direction == 'right') this.pos.x += 1;
    console.log("MOVE " + player.pos.x, player.pos.y);
}

function MandMeneer(){}

MandMeneer.prototype = new Character();

MandMeneer.prototype.jump = function(){
    this.pos.y -= 1;
    console.log("JUMP " + player.pos.x, player.pos.y);
}

var player = new MandMeneer();


	var keyMap = {37: false, 38: false, 39: false, 40: false};
	document.addEventListener("keydown", keyDownToMap, false);

	function keyDownToMap(e) {
	var keyCode = e.keyCode;
	  if (e.keyCode in keyMap) {
			keyMap[e.keyCode] = true;
			if (keyMap[39] && keyMap[40]) 									{ player.move('rightdown'); }
			if (keyMap[39] && keyMap[38]) 									{ player.move('rightup'); }
			if (keyMap[37] && keyMap[40]) 									{ player.move('leftdown'); }
			if (keyMap[37] && keyMap[38]) 									{ player.move('leftup'); }
			if (keyMap[37] && !keyMap[38] && !keyMap[39] && !keyMap[40]) 	{ player.move('left'); }
			if (keyMap[38] && !keyMap[37] && !keyMap[39] && !keyMap[40]) 	{ player.jump('up'); }
			if (keyMap[39] && !keyMap[37] && !keyMap[38] && !keyMap[40]) 	{ player.move('right'); }
			if (keyMap[40] && !keyMap[37] && !keyMap[38] && !keyMap[39]) 	{ player.move('down'); }
		}
	}

player.move();
player.jump();

console.log("kaas");


