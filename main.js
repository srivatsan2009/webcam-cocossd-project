objects=[];
status="";
alarm="alarm.mp3";
person="";
function preload() {
sound="alarm.mp3";
}

function setup() {
canvas=createCanvas(380,380);
canvas.center();
video=createCapture(VIDEO);
video.size(380,380);
video.hide();
objectdetection=ml5.objectDetector("cocossd",modeloaded);
document.getElementById("status").innerHTML="status:detecting image"
}

function modeloaded() {
console.log("model loaded");
status=true;
} 

function gotresults(error,results) {
if(error) {
console.log(error);
}
else {
console.log(results);
objects=results;
}
}

function draw() {
image(video,0,0,380,380);
if(status!="") {
r=random(255);
g=random(255);
b=random(255);
objectdetection.detect(video,gotresults);
for (i=0; i<objects.length; i++) {
document.getElementById("status").innerHTML="status:baby detected";
document.getElementById("no_of_objects_detected").innerHTML="no.of objects detected:"+objects.length;
fill(r,g,b);
percent=floor(objects[i].confidence*100);
textSize(20);
text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
noFill();
stroke(r,g,b);
rect(objects[i].x, objects[i].y, objects[i].width ,objects[i].height);

if(person==results[0].label="person".height= "323.6757230758667".width="171.52088165283203".x="200.8232879638672".y="27.2459077835083") {
alarm.play();
document.getElementById("status:baby not detected");
}
else {
alarm.stop();
document.getElementById("status:baby detected");
}
}
}
}

