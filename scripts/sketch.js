var ship;
var canvas;
var asteroids = [];
var bullets = [];

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
        if (a.getPos().dist(ship.getCenter()) < 50) {
            ship = new Ship();
        }
        a.show();
    });

    var temp = [];
    bullets.forEach(function (b) {
        if (b.isOnScreen()) {
            b.update();
            b.show();
            temp.push(b);
        }
    });
    bullets = temp;

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

    if (keyCode === 32) {
        if (bullets.length < 3) {
            bullets.push(new Bullet(ship.getCenter(), createVector(0, -10).rotate(ship.getAngle())));
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}