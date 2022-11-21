leftwristx=0;
rightwristx=0;
leftwristy=0;
rightwristy=0;
song1="";
song2="";
song1_status="";
song2_status="";

function preload(){
    song1=loadSound("music1.mp3");
    song2=loadSound("music2.mp3");

}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPosses);
}

function gotPosses(results){
  if(results.length>0){
      console.log(results);
      leftwristx=results[0].pose.leftWrist.x;
      leftwristy=results[0].pose.leftWrist.y;
      rightwristx=results[0].pose.rightWrist.x;
      rightwristy=results[0].pose.rightWrist.y;
      console.log("leftwristx="+leftwristx+",leftwristy="+leftwristy);
      console.log("rightwristx="+rightwristx+",rightwristy="+rightwristy);
  }
  
}

function modelLoaded(){
  console.log("poseNet is initiallized");

}

function draw(){
  image(video,0,0,600,500);

}

function play(){
  song.play();
  song.setVolume(1);
  song.rate(2.5);
}






