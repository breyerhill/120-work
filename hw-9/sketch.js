function setup() {
    createCanvas( 800, 800 );
    background( 'black' );
}


//lumberjack alien
function draw() {
  translate(400,400)
  fill( 'yellow' )
  noStroke();
  ellipse(-250,0,600 ,600);
  fill( 'white')
  ellipse(-180,-120,150,150)
  fill( 'black')
  triangle(200,100,-200,50,50,-100)
  ellipse(-180,-120,75,75)

  function mousePressed() {
    if true()
    fill( 'red')
    ellipse(-250,0,600 ,600);
    // prevent default
    return false;
}
}
