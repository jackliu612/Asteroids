var ship;
var canvas;
var asteroids = [];

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    ship = new Ship();
    for (var i = 0; i < 10; i++) {
        asteroids.push(new Asteroid());
    }
    background(51);
}

function draw() {
    background(51);
    ship.update();
    asteroids.forEach(function (a) {
        a.update();
        if(a.getPos().dist(ship.getCenter())<50){
            ship = new Ship();
        }
        a.show();
    });
    ship.show();
    /*ship.getPoints().forEach(function (p) {
        ellipse(p.x, p.y, 10, 10);
    });*/
}

function keyPressed() {
    if (keyCode === 8) {
        background(51);
        ship = new Ship();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}