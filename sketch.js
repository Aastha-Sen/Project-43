var hr
var min
var sec

var hrA
var minA
var secA

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);  

  translate(200,200);
  rotate(90);

  hr = hour();
  min = minute();
  sec = second();

  hrA=map(hr%12,0,12,0,360)
  minA=map(min,0,60,0,360)
  secA=map(sec,0,60,0,360)

  push();
  rotate(secA);
  stroke("red");
  strokeWeight(1);
  line(0,0,100,0);
  pop();

  push();
  rotate(minA);
  stroke("blue");
  strokeWeight(2);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrA);
  stroke("black");
  strokeWeight(3);
  line(0,0,50,0);
  pop();

  strokeWeight(5);
  noFill();

  stroke("red");
  arc(0,0,300,300,0,secA);

  stroke("blue");
  arc(0,0,280,280,0,minA);

  stroke("black");
  arc(0,0,260,260,0,hrA);

  drawSprites();
}