noseX=0;
noseY=0;
function preload(){
mustache= loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas= createCanvas(400,400);
    canvas.position(570,215);
    video= createCapture(VIDEO)
    video.size(400,400);
    video.hide();

    tinting="";
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,400,400);
    tint(tinting);
    image(mustache, noseX-43, noseY, 90, 50);
}

function take_photo(){
    save('Hoorah_I_got_a_Mustache.png');
}

function modelLoaded(){
    console.log('Agent Kshitij, I am ready');
}

function Tint_it(){
    tinting=document.getElementById("color_holder").value;
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
    }
}