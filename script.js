let data;

function preload() {
    data = loadJSON("data.json");
    print("c");
    print("c");
    print(data);
}


function setup() {
    print("a");
    print(data.label);
}
    // createCanvas(1000, 600);
    
    // speedSlider = createSlider(0.0001, 0.1, 0.01, 0.0001);

    // sun = {
    //     r: 50,
    //     pos: createVector(width / 2, height / 2)
    // }
// }
    // for (let item of data) {
    //     print(item);
    //     // if (d.center == 0) {
    //     //     bodies.push(new Body(center=sun, radius=d.radius, distance=d.distance, angle=d.angle, c=d.color));
    //     // }
    // }

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



// function draw() {
//     background(20);
//     print("test");

//     fill(255);
//     ellipse(sun.pos.x, sun.pos.y, sun.r*2);

//     for (let body of bodies) {
//         print("aaaa");
//         body.update();
//         body.orbit();
//         body.draw();
//     }
// }
