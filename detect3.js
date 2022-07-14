stat = "";
function preload(){
img= loadImage("ac.jpg");    
}

function setup(){
canvas = createCanvas(400,400);
canvas.position(450,120);
objectDetecter = ml5.objectDetector('cocossd',modalLoaded);
}
function draw(){
image(img,0,0,400,400)    
}
function modalLoaded(){
    
stat = true;
objectDetecter.detect(img , gotResults);    
}
function gotResults(error,results){
if(error){
console.log(error);    
}
console.log(results)
}