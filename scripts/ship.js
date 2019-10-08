// noinspection UnterminatedStatementJS

function Ship() {
    var pos = createVector(windowWidth/2, windowHeight/2);
    var vel = createVector(0, 0);
    var acc = createVector(0, 0);
    var angle = 0;

    this.update = function () {

        //Should have all key downs together in one else if
        //If nothing is pressed, acc = 0 and vel goes down to 0
        if (keyIsDown(UP_ARROW)) {
            acc = createVector(0, -0.2).rotate(angle);
        } else {
            acc = createVector(0, 0);
            var mag = vel.mag();
            if (mag > .03) {
                vel.limit(mag - .03);
            } else {
                vel = createVector(0, 0);
            }
        }

        if (keyIsDown(LEFT_ARROW)) {
            angle += -0.1;
        }

        if (keyIsDown(RIGHT_ARROW)) {
            angle += 0.1;
        }

        vel.limit(8);
        wrapAround();


        pos.add(vel);
        vel.add(acc);

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
        strokeWeight(1);
        stroke(0, 255, 17);
        fill(0, 255, 17);
        ellipse(pos.x, pos.y, 15, 15);
        push();
        fill(0, 255, 17);
        translate(pos.x, pos.y);
        rotate(angle);
        if (acc.x !== 0 && acc.y !== 0) {
            push();
            fill(255, 25, 0);
            stroke(255, 25, 0);
            triangle(-15, 0, 15, 0, 0, 20);
            fill(255, 255, 0);
            stroke(255, 255, 0);
            triangle(-8, 0, 8, 0, 0, 10);
            pop();
        }
        triangle(0, 0, 0, -25, 25 / 2 * Math.sqrt(3), 25 / 2);
        triangle(0, 0, 0, -25, -25 / 2 * Math.sqrt(3), 25 / 2);
        pop();
    }

    this.getPoints = function () {
        var p = [];
        p.push(p5.Vector.fromAngle(angle - Math.PI / 2, 25).add(pos));
        p.push(p5.Vector.fromAngle(angle - 7 * Math.PI / 6, 25).add(pos));
        p.push(p5.Vector.fromAngle(angle - 11 * Math.PI / 6, 25).add(pos));
        return p;
    }

    this.getCenter = function () {
        return pos;
    }
}