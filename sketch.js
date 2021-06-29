
var iss,issimg;
var bath ,bathimg
function preload() {
bathimg=loadAnimation(" images/bath1.png","images/bath2.png")
 issimg=loadImage("images/iss.png") 
} 
function setup() {
  createCanvas(800,400);
  iss=createSprite(400,200)
  bath= createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}