var dots = [];
var clock;

function setup() {
//creates canvas and makes it adjust to window width and height, then sets background to white
  createCanvas(windowWidth, windowHeight);
  clock = new Clock();

}

function draw(){
  background(0);
  Clock.show();
}

class Clock {
  constructor() {
    this.x = windowWidth/2;
    this.y = windowHeight/2;
  }

  show() {
    stroke(255);
    fill('white')
    ellipse(this.x,this.y,600)
  }

}
