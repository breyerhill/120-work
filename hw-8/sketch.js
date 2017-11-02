//background
function setup() {
    createCanvas( windowWidth, windowHeight );
    background( 'black' );
}

//draws canvas

function draw(){

  //eyes and smile pt 1

  fill("red");
  ellipse(windowWidth / 4, windowHeight/4,120,120);
  ellipse(windowWidth * 0.75, windowHeight * 0.25,120,120);
  fill (random(200,255));

  //for functions that control different portions of the teeth

  for (var smile = 0; smile <= windowWidth; smile = smile + 40)
    { ellipse(smile + random(5),(windowHeight * 0.5) + random(100) ,40,40); }

  fill("white");
  ellipse(windowWidth / 4, windowHeight/4,80,80);
  ellipse(windowWidth * 0.75, windowHeight * 0.25,80,80);

  for (var smile = 0; smile <= windowWidth; smile = smile + 40)
    { ellipse(smile,(windowHeight * 0.5) + random(150) ,40,40); }

    //code for background animation

  var red = random(8,15);
  var green = random(50,110);
  var blue = random(100,255);
  fill(red,green,blue);
  noStroke();
  var y = windowHeight - 50

  for (var x = 0; x <= windowWidth; x = x + 40)
    { ellipse(x,random(y-height, height),50,50); }

  //code for mainly the black lines in the teeth but also the black part of eyes

  fill ('black');
  ellipse(windowWidth / 4, windowHeight/4,60,60);
  ellipse(windowWidth * 0.75, windowHeight * 0.25,60,60);
  for (var teeth = 0; teeth <= windowWidth; teeth = teeth + 1)
    { ellipse(teeth,windowHeight / 2 + 60,10,10); }

  for (var teethLines = 0; teethLines <= windowWidth; teethLines = teethLines + 50)
    { ellipse(teethLines,windowHeight / 2 + random(150),20,20); }

    for (var teethLines = 0; teethLines <= windowWidth; teethLines = teethLines + 50)
      { ellipse(teethLines,windowHeight / 2 + random(150),20,20); }

      for (var teethLines = 0; teethLines <= windowWidth; teethLines = teethLines + 50)
        { ellipse(teethLines,windowHeight / 2 + random(150),20,20); }

        for (var teethLines = 0; teethLines <= windowWidth; teethLines = teethLines + 50)
          { ellipse(teethLines,windowHeight / 2 + random(150),20,20); }


}
