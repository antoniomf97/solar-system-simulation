let sun;
const bodys = [];

function setup() {
    createCanvas(1000, 600);
    
    speedSlider = createSlider(0.0001, 0.1, 0.01, 0.0001);

    sun = new Sun(r=25, c=[255, 255, 255])
    bodys.push(new Body(r=5, d=75, a=1, c=[200, 150, 0]));
    bodys.push(new Body(r=10, d=100, a=0.5, c=[0, 150, 200]));
    bodys.push(new Body(r=5, d=200, a=3, c=[200, 50, 0]));
    bodys.push(new Body(r=7, d=250, a=4.5, c=[50, 150, 50]));
    bodys.push(new Body(r=15, d=275, a=1, c=[100, 100, 250]));
}

function draw() {
    background(20);
    
    translate(width/2, height/2);

    sun.show();
    for (let body of bodys) {
        body.update();
        body.show();
    }
}