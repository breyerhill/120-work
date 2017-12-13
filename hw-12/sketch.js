//declares the variable dots and says that it is empty
var dots = [];
//sets up the canvas and other pieces of the program
function setup() {
// push and pop keep the frame rate isolated to the set up only.
  push();
  //moves the axis and assignes a frame rate that is slow
  translate(windowWidth * 0.5,windowHeight * 0.5);
  frameRate(10);
  pop();
//creates canvas and makes it adjust to window width and height
  createCanvas(windowWidth, windowHeight);
  //tells the program that I would like 390 instances of the dot class
  for (var i = 0; i < 390; i++) {
    //defines the dot class
  dots[i] = {
    //sets the x and y values u
    x: random(0,windowWidth),
    y: random(0,windowHeight),
//crates a function within a class that can be called on in draw to display the dots and their charactoristics
    show: function() {
//charactoristics of the dot class
      stroke(random(255),random(255),random(255));
      strokeWeight(0.5);
      noFill();
      ellipse(this.x, this.y, 100, 100);
    },
//method used to change the values of x and y and add then to a random value between -10 and 10
    move: function() {
      this.x = this.x + random(-10, 10);
      this.y = this.y + random(-10, 10);
    }
  }
}}
//puts shapes and other pieces onto canvas in a continuous loop
function draw(){

  //zapper variables
  var x1 = windowWidth/2
  var x2 = random(windowWidth);
  var x3 = random(windowWidth);
  var x4 = random(windowWidth);
  var y1 = windowHeight/2
  var y2 = random(windowHeight);
  var y3 = random(windowHeight);
  var y4 = random(windowHeight);
  //measures the distance between the center of the window compared to that of the mouse possition
  var d = dist(x1,x2,mouseX,mouseY);
  //statement that tells the program if the mouse is outside of the desired area
  //that the dots will start to dissapear
  if (d >= 600 === true){
    dots.splice(i,10)
    }
//or if its false to not splice or add in anything to the aray
  else {dots.splice(i,0)}
  //statement that asks the program wheter or not a key is being pressed
  //if true the program creates the zapper lines and speeds up the framerate only while the key is pressed
  if (keyIsPressed === true) {
    push()
    frameRate(100);
    dots.splice(i,1);
    fill(random(255));
    line(x1,y1,x2,y2);
    line(x1,y1,x3,y3);
    line(x1,y1,x4,y4);
    pop();
}
// if false the program just keeps the remaining dots moving using the same methods as before and slows back down
  else {
  background(0);
  frameRate(10);
  for (var i = 0; i < dots.length; i++) {
    dots[i].move();
    dots[i].show();

  }

  //creates menu
  //places text on menu with instructions for used
  fill(0);
  ellipse(windowWidth/2,windowHeight/2,600);
  push();
  textSize(windowWidth * 0.017);
  text("Dots deteriorate over time",x1- 130, y1+150);
  text("place cursor in space below to save the dots",x1- 210, y1+200);
  text("HIT ANY KEY FOR MEGA ZAPPER!", x1- 180, y1-200);
  pop();
  push();
  textSize (windowWidth * 0.05);
  text("DOT MANIA!",x1- 180, y1);
  pop();
}
}
