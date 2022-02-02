song_dynamite = "";
song_levitating = "";

right_wristX = 0;
right_wristY = 0;

left_wristX = 0;
left_wristY = 0;

function setup() {
  canvas = createCanvas(650, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  posenet = ml5.poseNet(video, modelLoaded);
  posenet.on("pose", getPoses);
}

function modelLoaded() {
  console.log("Posenet Is Initialized");
}

function getPoses(results) {
  if (results.length > 0) {
    console.log(results);

    right_wristX = results[0].pose.rightWrist.x;
    right_wristY = results[0].pose.rightWrist.y;
    console.log("Right Wrist X=" + right_wristX + " Right Wrist Y=" + right_wristY);

    left_wristX = results[0].pose.leftWrist.x;
    left_wristY = results[0].pose.leftWrist.y;
    console.log("Left Wrist X=" + left_wristX + " Left Wrist Y=" + left_wristY);
  }
}

function preload() {
  song_dynamite = loadSound("dynamite.mp3");
  song_levitating = loadSound("levitating.mp3");
}

function draw() {
  image(video, 0, 0, 650, 500);
}