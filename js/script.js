// NameSpace
//var GAME = GAME || {};

function Character(){
    this.pos = {x:100, y:100};
}

Character.prototype.move = function(){
    this.pos.x += 1;
}

function MandMeneer(){}

MandMeneer.prototype = new Character();

MandMeneer.prototype.jump = function(){
    this.pos.y -= 1;
}

var player = new MandMeneer();

player.move();
player.jump();

console.log(player.pos.x, player.pos.y);



