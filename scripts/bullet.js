function Bullet(p, v) {
    var pos = p;
    var vel = v;

    this.update = function () {
        pos.add(vel);
    }

    this.show = function () {
        push();
        stroke(255);
        strokeWeight(10);
        ellipse(pos.x, pos.y, 5, 5);
        pop();
    }

    this.isOnScreen = function () {
        return (pos.x > 0 && pos.x < windowWidth && pos.y > 0 && pos.y < windowWidth);
    }
}