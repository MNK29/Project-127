hp = "";
os = "";

function preload(){
    hp = loadSound("Harry-Potter.mp3");
    os = loadSound("One-Shot.mp3");
}

function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 500, 400);
}