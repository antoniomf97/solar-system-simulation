let data;
const bodies = []


function preload() {
    data = loadJSON("./assets/data.json");
}


function setup() {
    createCanvas(1000, 600);
    
    speedSlider = createSlider(0.0001, 0.1, 0.01, 0.0001);

    sun = {
        r: 50,
        pos: createVector(width / 2, height / 2)
    }

    for (let body of data.bodies) {
        center = body.center == 0 ? sun : bodies[body.center];
        bodies.push(new Body(center=center, radius=body.radius, distance=body.distance, 
                    angle=body.angle, c=body.color, v=body.velocity));
    }

    // bodys.push(new Body(center=sun, radius=10, distance=150, angle=90, c=[255,255,255]));
    // bodys.push(new Body(center=bodys[0], radius=3, distance=25, angle=45, c=[255,255,255], tier=2));
    // bodys.push(new Body(center=bodys[0], radius=2, distance=40, angle=20, c=[255,255,255], tier=3));
    // bodys.push(new Body(center=bodys[0], radius=5, distance=50, angle=20, c=[255,255,255], tier=3));

    // bodys.push(new Body(center=sun, radius=7, distance=75, angle=45, c=[255,255,255]));
    // bodys.push(new Body(center=sun, radius=10, distance=220, angle=90, c=[255,255,255]));
    // bodys.push(new Body(center=sun, radius=20, distance=270, angle=90, c=[255,255,255]));
    // bodys.push(new Body(center=bodys[6], radius=3, distance=30, angle=90, c=[255,255,255]));
    // bodys.push(new Body(center=sun, radius=30, distance=370, angle=45, c=[255,255,255]));
    // bodys.push(new Body(center=bodys[8], radius=5, distance=60, angle=90, c=[255,255,255], tier=3));
    
    // bodys.push(new Body(center=bodys[9], radius=2, distance=10, angle=90, c=[255,255,255], tier=4));
    // bodys.push(new Body(center=bodys[8], radius=5, distance=40, angle=90, c=[255,255,255], tier=3));
}


function draw() {
    background(20);

    fill(255);
    ellipse(sun.pos.x, sun.pos.y, sun.r*2);

    for (let body of bodies) {
        body.update();
        body.orbit();
        body.draw();
    }
}
