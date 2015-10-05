var GAME = GAME || {};

function Object1(parent) {

    this.parent = parent;

    var _this = this;
    window.addEventListener('keydown', function(e){
        _this.keyHandler(e.keyCode);
    });

}
Object1.prototype.keyHandler = function(key){
    if (key == 39) this.parent.object2.move("right");
    if (key == 37) this.parent.object2.move("left");
};

function Object2() {
    this.pos = {x: document.getElementById('myCanvas').width/2,
                y: document.getElementById('myCanvas').height/2};
}

Object2.prototype.move = function(dir) {
    if (dir == "right") this.pos.x+=10;
    if (dir == "left") this.pos.x-=10;
};

Object2.prototype.getCoords = function() {
    return this.pos;
};

function Object3(parent) {
    this.canvas = document.getElementById('myCanvas');
    this.context = this.canvas.getContext('2d');
    this.parent = parent;
}

Object3.prototype.draw = function() {
    var pos = this.parent.object2.getCoords();

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.beginPath();
    this.context.rect(pos.x,pos.y,25,50);
    this.context.fillStyle = "pink";
    this.context.fill();
};

function Object4() {
    this.object1 = new Object1(this);
    this.object2 = new Object2();
    this.object3 = new Object3(this);
    this.update();
}

Object4.prototype.update = function() {
    this.object3.draw();

    var _this = this;
    window.requestAnimationFrame( function() {
        _this.update()
    });
};

var controller = new Object4();