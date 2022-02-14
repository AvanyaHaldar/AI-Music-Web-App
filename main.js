dynamite_song = "";
levitating_song = "";
dynamite_songStatus = "";
levitating_songStatus = "";
rightWrist_x = 0;
rightWrist_y = 0;
leftWrist_x = 0;
leftWrist_y = 0;
scoreleftWrist = 0;
scorerightWrist = 0;
song_name = "";

function setup() {
    canvas = createCanvas(600, 530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function preload() {
    dynamite_song = loadSound("dynamite.mp3");
    levitating_song = loadSound("levitating.mp3");
}

function draw() {
    image(video, 0, 0, 600, 530);

    fill("magenta");
    stroke("purple");

    dyanamite_songStatus = dynamite_song.isPlaying();
    console.log(dyanamite_songStatus);

    levitating_songStatus = levitating_song.isPlaying();
    console.log(levitating_songStatus);

    if (scoreleftWrist > 0.2) {
        circle(leftWrist_x, leftWrist_y, 20);
        levitating_song.stop();
        if (dyanamite_songStatus == false) {
            dynamite_song.play();
            console.log("Song Name: Dynamite Song");
            document.getElementById("song_id").innerHTML = "Song Name: Dynamite Song";
        }
    }

    if (scorerightWrist > 0.2) {
        circle(rightWrist_x, rightWrist_y, 20);
        dynamite_song.stop();
        if (levitating_songStatus == false) {
            levitating_song.play();
            console.log("Song Name: Levitating Song");
            document.getElementById("song_id").innerHTML = "Song Name: Levitating Song";
        }
    }
}

function modelLoaded() {
    console.log("poseNet Is Initialized");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftWrist);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = " + leftWrist_x + " leftWrist_y = " + leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = " + rightWrist_x + " rightWrist_y = " + rightWrist_y);

        scorerightWrist = results[0].pose.keypoints[10].score;
        console.log(scorerightWrist);



    }
}

function stopSong() {
    dynamite_song.pause();
    levitating_song.pause();
}