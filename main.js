song_dynamite="";
song_levitating="";

function setup() {
    canvas = createCanvas(650,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function preload() {
  song_dynamite=loadSound("dynamite.mp3");
  song_levitating=loadSound("levitating.mp3");  
}

function draw() {
    image(video,0,0,650,500);
}