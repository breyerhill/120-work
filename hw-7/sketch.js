

var ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
    createCanvas(windowWidth, 400);
    background(255);
    frameRate(1000);
}

function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {

    ball.delta_x = -1 * ball.delta_x;
    }


    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
    var ballColor = {};
    ballColor.r = 0;
    ballColor.g = 0;
    ballColor.b = 0;

      if (mouseIsPressed){
          ballColor.r = ballColor.r+random(280)
        }
      if (ballColor.r >= 280){
        ballColor.r = 0
      }

      if ( mouseIsPressed){
          ballColor.g = ballColor.g+random(280)

        }
      if (ballColor.g >= 280){
          ballColor.g = 0
        }
      if ( mouseIsPressed){
        ballColor.b = ballColor.b+random(280)
      }
      if (ballColor.b >= 280){
        ballColor.b = 0
      }

    fill(ballColor.r,ballColor.g,ballColor.b);
    ellipse(ball.x, ball.y, ball.width + random(20), ball.width);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
