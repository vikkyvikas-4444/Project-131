function setup() {
    canvas=createCanvas(640 , 420);
    canvas.center();

}

img="";

function preload() {
    img=loadImage('brothers.jpg');
}

function draw() {
  
    image(img , 0 , 0 , 600 , 500);
    fill("#FF0000");
    text("Brothers" , 55 , 75);
    noFill();
    stroke("#FF0000")
    rect(30 , 60 , 450 , 500);
}