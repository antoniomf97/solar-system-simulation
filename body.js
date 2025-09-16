class Body {
    constructor(center, radius, distance, angle, c, tier=1) {
        this.c = center;
        this.r = radius;

        this.a = radians(angle);
        this.d = distance;
        this.p = p5.Vector.fromAngle(this.a).mult(this.d);
        
        this.v = random(1, 3) * tier;
        this.color = color(c[0], c[1], c[2]);
    }

    get pos() {
        return p5.Vector.add(this.c.pos, this.p);
    }

    update() {
        this.a += this.v * speedSlider.value();
        this.p = p5.Vector.fromAngle(this.a).mult(this.d);
    }

    draw() {
        push();
        translate(this.c.pos);
        fill(this.color);
        ellipse(this.p.x, this.p.y, this.r*2);
        pop();
    }

    orbit() {
        push();
        noFill();
        strokeWeight(1);
        stroke([50,50,50]);
        ellipse(this.c.pos.x, this.c.pos.y, this.d*2);
        pop();
    }
}
