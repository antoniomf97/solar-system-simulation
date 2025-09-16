let center;
const bodys = [];

function setup() {
    createCanvas(1000, 600);
    
    speedSlider = createSlider(0.0001, 0.1, 0.01, 0.0001);

    sun = {
        r: 50,
        pos: createVector(width / 2, height / 2)
    }

    bodys.push(new Body(center=sun, radius=10, distance=150, angle=90, c=[255,255,255]));
    bodys.push(new Body(center=bodys[0], radius=2, distance=25, angle=45, c=[255,255,255], tier=2));
    bodys.push(new Body(center=bodys[0], radius=2, distance=40, angle=20, c=[255,255,255], tier=3));
    bodys.push(new Body(center=bodys[0], radius=4, distance=50, angle=20, c=[255,255,255], tier=3));

    bodys.push(new Body(center=sun, radius=10, distance=220, angle=90, c=[255,255,255]));
    bodys.push(new Body(center=sun, radius=15, distance=250, angle=90, c=[255,255,255]));
}

function draw() {
    background(20);

    fill(255);
    ellipse(sun.pos.x, sun.pos.y, sun.r*2);

    for (let body of bodys) {
        body.update();
        body.orbit();
        body.draw();
    }
}