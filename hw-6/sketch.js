

var color1 = mouseX
var color2 = mouseX
var color3 = mouseX

//start up function
function setup() {

//builds canvas and makes it black
  createCanvas(displayWidth, displayHeight);
  background('black');
//creates position variable and says that its located at mouse x possition plus a radndom variable from zero to the width
  position = mouseX + random(width);

}
//draw function to create visuals
function draw() {
// slows frame rate down
frameRate(5)

//gives the position variable new info and says to map a path that changes the area that
//it collects the mouse x possition from the whole screen to half the screen


//I have also told it to round in order because I believe that the width could be a float number and not come out
//as a solid number so rounding will make this less bits

var position = ceil(map(mouseX, 0, width, (width / 2), (height / 2),true));

fill(85, 130, 76);
//draws elipse based off the mouse position and random numbers between 0 and 500 determine the size
ellipse(position,height/ 2,random(500),random(500));

//created variables to make the triangle function smaller and the code easier to read
xp1 = random(width)
yp1 = random(height)
xp2 = random(sqrt(xp1) + 300)
yp2 = random(height)
xp3 = width / 2
yp3 = height / 2

//colors it white

fill(62, 188, 37)
//draws triangles with randomly generated point coordinates
triangle(xp1,yp1,xp2,yp2,xp3,yp3)







}
