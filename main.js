function setup() {
    canvas = createCanvas(600,560);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(560,560);
    video.hide();
}