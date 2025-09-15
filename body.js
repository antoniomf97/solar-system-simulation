class Sun {
    constructor(r, c) {
        this.r = r;    
        this.c = color(c[0], c[1], c[2]);

        this.bodies = [];
    }

    show() {
        fill(this.c);
        ellipse(0, 0, this.r*2, this.r*2);
    }
}

class Body {
    constructor(r, d, a, c) {
        this.r = r;
        this.a = a;
        this.d = d;
        this.pi = createVector(d * cos(a), this.d * sin(a));
        this.vi = 0.05 * random(1, 5);
        
        this.c = color(c[0], c[1], c[2]);

        this.bodies = [];
    }

    update() {
        this.v = this.vi * speedSlider.value();
        this.a += this.v;
        rotate(this.angle);
        this.p = createVector(this.d * cos(this.a), this.d * sin(this.a));
    }

    show() {
        fill(this.c);
        ellipse(this.p.x, this.p.y, this.r*2, this.r*2);
    }
}
