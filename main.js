noseX=0;
noseY=0;
buttontype=""
function preload(){
    clown_nose = loadImage('https://i.postimg.cc/TYmtgkVT/580b57fbd9996e24bc43bed5.png');
    mustachtime = loadImage('https://i.postimg.cc/D0spkjW6/unnamed.png');
    poutlips = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
video.size(300,300)
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log('PoseNet Is Intialized');

}
function draw(){
    image(video,0,0,300,300);
if(buttontype =="clown"){
image(clown_nose, noseX, noseY, 30, 30);
}
if(buttontype =="mustach"){
    image(mustachtime, noseX, noseY, 70, 70);
 }
 if(buttontype =="pout"){
    image(poutlips, noseX, noseY, 40, 40);
    }
}

function take_snapshot(){
    save('myFiLterImage.png');
}

function gotPoses(results){
   if(buttontype == "mustach"){
    if(results.length > 0){
        console.log(results);
        noseX= results[0].pose.nose.x-30;
        noseY= results[0].pose.nose.y-10;
        console.log("nose x = "+ noseX);
        console.log("nose y = "+ noseY);
    }
}
if(buttontype == "clown"){
    if(results.length > 0){
        console.log(results);
        noseX= results[0].pose.nose.x-15;
        noseY= results[0].pose.nose.y-15;
        console.log("nose x = "+ noseX);
        console.log("nose y = "+ noseY);
    }
}
if(buttontype == "pout"){
    if(results.length > 0){
        console.log(results);
        noseX= results[0].pose.nose.x-17;
        noseY= results[0].pose.nose.y+10;
        console.log("nose x = "+ noseX);
        console.log("nose y = "+ noseY);
    }
}
}

function mustach(){
buttontype="mustach"
}
function clown(){
    buttontype="clown"
}
function pout(){
    buttontype="pout"
    }