var ship;
var canvas;
var asteroids = [];
var bullets = [];

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    ship = new Ship();
    for (var i = 0; i < 10; i++) {
        asteroids.push(new Asteroid(Math.ceil(Math.random() * 3)));
    }
    background(51);
}

function draw() {
    background(51);
    ship.update();

    var tempA = [];
    var isHit = false;
    asteroids.forEach(function (a) {
        isHit = false;
        var tempB = [];
        bullets.forEach(function (b) {
            if (a.getPos().dist(b.getPos()) < a.getSize()*25) {
                isHit = true;
            } else{
                tempB.push(b);
            }
        });
        bullets = tempB;

        if (!isHit) {
            a.update();
            if (a.getPos().dist(ship.getCenter()) < 25 + 25 * a.getSize()) {
                ship = new Ship();
                bullets = [];
                tempA = [];
                for (var i = 0; i < 10; i++) {
                    tempA.push(new Asteroid(Math.ceil(Math.random() * 3)));
                }
            }
            a.show();
            tempA.push(a);
        }
    });
    asteroids = tempA;

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