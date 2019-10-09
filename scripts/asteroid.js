function Asteroid(s) {
    var pos = createVector(500, 500);
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
        ellipse(0, 0, 50*size, 50*size);
        pop();
    }

    this.getPos = function () {
        return pos;
    }

    this.getSize = function() {
        return size;
    }
}