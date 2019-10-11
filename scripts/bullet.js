function Bullet(p, v) {
    var pos = p;
    var vel = v;

    this.update = function () {
        pos.add(vel);
    }

    this.show = function () {
        push();
        stroke(255);
        /**
         * Victor is dumb
         */
        //stroke(255*random(),255*random(),255*random());
        strokeWeight(5);
        ellipse(pos.x, pos.y, 5, 5);
        pop();
    }

    this.isOnScreen = function () {
        return (pos.x > 0 && pos.x < windowWidth && pos.y > 0 && pos.y < windowHeight);
    }

    this.getPos = function() {
        return pos.copy();
    }

    this.getVelocity = function () {
        return vel.copy();
    }
}