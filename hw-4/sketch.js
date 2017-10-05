function setup() {
    createCanvas( 800, 800 );
    background( 'black' );
}
function draw() {
  translate(400,400)
  fill( 'red' )
  noStroke();
    rect( -200, 0, 400, 500, 62);
  fill( 'yellow' )
    rect( -100, 0, 50, 400);
    rect(   50, 0, 50, 400);
  fill( 'black' )
    ellipse( -75, 50, 50, 50);
    ellipse(  75, 50, 50, 50);
  fill( 'red' )
    ellipse( -85, 60, 10, 10);
    ellipse( -85, 40, 10, 10);
    ellipse( -65, 60, 10, 10);
    ellipse( -65, 40, 10, 10);
    ellipse(  85, 60, 10, 10);
    ellipse(  85, 40, 10, 10);
    ellipse(  65, 60, 10, 10);
    ellipse(  65, 40, 10, 10);
  fill( 'rgb(16, 229, 16)' )
    rect(-50, -50, 100, 50);
    ellipse(0, -200, 300, 400);
  fill( 'black')
    arc( 0, -100, 100, 50, 0, 0, HALF_PI );
    triangle( 80, -280, 100, -200, 0, -200);
    triangle( -80, -280, -100, -200, 0, -200);
  fill( 'white')
    triangle( 90, -280, 80, -190, 0, -200);
    triangle( -90, -280, -80, -190, 0, -200);
  fill( 'black')
    ellipse(-40,-220,30,30);
    ellipse(40,-220,30,30);
  fill( 'black')
  stroke( 'black')
  strokeWeight(20)
  line(100,-300,10,-220)
  line(-100,-300,-10,-220)
  fill ( 'red')
  noStroke();
    quad(-200,50,-100,80,-280,280,-300,200)
    quad(200,50,100,80,280,250,300,200)
    quad(-300,200,-280,230,-280,400,-320,400)
    quad(300,200,280,230,280,400,320,400)




}
