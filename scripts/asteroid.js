function Asteroid(s) {
    var r = random();
    var pos;
    if (r < .25) {
        pos = createVector(0, random() * windowHeight);
    } else if (r < .5) {
        pos = createVector(windowWidth, random() * windowHeight);
    } else if (r < .75) {
        pos = createVector(random() * windowWidth, 0);
    } else {
        pos = createVector(random() * windowWidth, windowHeight);
    }


    var vel = createVector(random() * 2 + 1.5, 0).rotate(random() * Math.PI * 2);
    var size = s;

    this.update = function () {
        pos.add(vel);
        wrapAround();
    }

    function wrapAround() {
        if (pos.x < 0) {
            pos.x = windowWidth;
        }
        if (pos.x > windowWidth) {
            pos.x = 0;
        }
        if (pos.y < 0) {
            pos.y = windowHeight;
        }
        if (pos.y > windowHeight) {
            pos.y = 0;
        }
    }

    this.show = function show() {
        push();
        stroke(255);
        strokeWeight(1);
        noFill();
        translate(pos.x, pos.y);
        ellipse(0, 0, 50 * size, 50 * size);
        pop();
    }

    this.getPosition = function () {
        return pos.copy();
    }

    this.getVelocity = function () {
        return vel.copy();
    }

    this.getSize = function () {
        return size;
    }

    this.setPosition = function (p) {
        pos = p.copy();
    }
    this.setVelocity = function (v) {
        vel = v.copy();
    }
}