function setup() {
//creates canvas and makes it adjust to window width and height, then sets background to white
  createCanvas(windowWidth, windowHeight);
  background(255);
}
//initializes the draw function and declares some variables that I used to generate random colors
function draw() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
//draws the largest white part of the eye and possitions and sizes it using simple math
  fill(random(200,255))
  ellipse( windowWidth / 2,windowHeight /2, windowWidth, windowHeight / 1.5);
//draws the colorful circle in the middle of the eye
//uses my variables and the random function to get it change colors
  fill(r,g,b)
  ellipse( windowWidth / 2,windowHeight /2, windowWidth- 300, 300);
//small black circle use in order to make the colorful circle in the eye look open
  fill(0);
  ellipse( windowWidth / 2,windowHeight /2, windowWidth - 500, 225);
//used push and pop to keep the stroke and stroke weight specific to the line
  push();
//creates three small red laser beams coming out of the eye
  stroke('red')
  strokeWeight(10)
  line(windowWidth / 2, windowHeight /2, mouseX,mouseY)
  line(windowWidth / 2.05, windowHeight /2.05, mouseX,mouseY)
  line(windowWidth / 2.1, windowHeight /2.1, mouseX,mouseY)
  pop();
}
