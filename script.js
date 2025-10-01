let data;
const bodies = []


function preload() {
    data = loadJSON("./assets/data.json");
}


function setup() {
    createCanvas(1000, 600);
    
    speedSlider = createSlider(0.001, 0.1, 0.005, 0.001);

    sun = {
        r: 50,
        pos: createVector(width / 2, height / 2)
    }

    for (let body of data.bodies) {
        center = body.center == 0 ? sun : bodies[body.center];
        bodies.push(new Body(center=center, radius=body.radius, distance=body.distance, 
                    angle=body.angle, c=body.color, v=body.velocity));
    }
}


function draw() {
    background(20);

    fill(255);
    ellipse(sun.pos.x, sun.pos.y, sun.r*2);

    for (let body of bodies) {
        body.update();
        // body.orbit();
        body.draw();
    }
}
