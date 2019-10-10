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
    var reset = false;
    asteroids.forEach(function (a) {
        isHit = false;
        var tempB = [];
        var bVel;
        bullets.forEach(function (b) {
            if (a.getPosition().dist(b.getPos()) < a.getSize() * 25) {
                isHit = true;
                bVel = b.getVelocity();
            } else {
                tempB.push(b);
            }
        });
        bullets = tempB;

        if (!isHit) {
            a.update();
            if (a.getPosition().dist(ship.getCenter()) < 25 + 25 * a.getSize()) {
                reset = true;
            }
            a.show();
            tempA.push(a);
        } else if (a.getSize() > 1) {
            var newA1 = new Asteroid(a.getSize() - 1);
            newA1.setPosition(a.getPosition());
            newA1.setVelocity(bVel.rotate(Math.PI / 3).limit(random() * 2 + 1.5));
            var newA2 = new Asteroid(a.getSize() - 1);
            newA2.setPosition(a.getPosition());
            newA2.setVelocity(bVel.rotate(-Math.PI / 3).limit(random() * 2 + 1.5));
            tempA.push(newA1);
            tempA.push(newA2);
        }
    });
    if (reset) {
        ship = new Ship();
        bullets = [];
        tempA = [];
        for (var i = 0; i < 10; i++) {
            tempA.push(new Asteroid(Math.ceil(Math.random() * 3)));
        }
    }
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
            bullets.push(new Bullet(p5.Vector.fromAngle(ship.getAngle() - Math.PI / 2, 25).add(ship.getCenter()), createVector(0, -10).rotate(ship.getAngle())));
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}