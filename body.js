class Body {
    constructor(center, radius, distance, angle, c, velocity) {
        this.c = center;
        this.r = radius;

        this.a = radians(angle);
        this.d = distance;
        this.p = p5.Vector.fromAngle(this.a).mult(this.d);
        
        this.v = velocity;
        this.color = c;
        // this.color = color(c[0], c[1], c[2]);
        this.trail = [];
    }

    get pos() {
        return p5.Vector.add(this.c.pos, this.p);
    }

    update() {
        this.a += this.v * speedSlider.value();
        this.p = p5.Vector.fromAngle(this.a).mult(this.d);
        this.trail.push(this.p);
        this.trail = this.trail.slice(Math.max(this.trail.length - 100 + this.v*7, 0))
    }

    draw() {
        push();
        translate(this.c.pos);
        fill(this.color);
        ellipse(this.p.x, this.p.y, this.r*2);

        strokeWeight(1);
        beginShape();
        for (let p of this.trail) {
            stroke(this.color[0], this.color[1], this.color[2], 100);
            noFill();
            vertex(p.x, p.y);
        }
        endShape();
        pop();
    }

    orbit() {
        push();
        noFill();
        strokeWeight(1);
        stroke([40,40,40]);
        ellipse(this.c.pos.x, this.c.pos.y, this.d*2);
        pop();
    }
}
