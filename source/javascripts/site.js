//= require "grid"

const mass = [];
const positionX = [];
const positionY = [];
const velocityX = [];
const velocityY = [];
var canvas;


/////////// resize canvas not working on animation /////////
function windowResized() {
   console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}

///////////////// Create canvas ////////////////////////////////////////////////////////////////////////////////////

function setup() {
const canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0, 0);
canvas.style('z-index: -1')
noStroke();
fill(22, 22, 29, 50);
}



////////////////////// Create particles ///////////////////////////////////////////////////////////////////////////////

function draw() {
background(255);

for (let particleA = 0; particleA < mass.length; particleA++) {
  var accelerationX = 0, accelerationY = 0;

  for (let particleB = 0; particleB < mass.length; particleB++) {
    if (particleA != particleB) {
      const distanceX = positionX[particleB] - positionX[particleA];
      const distanceY = positionY[particleB] - positionY[particleA];

      let distance = sqrt(distanceX * distanceX + distanceY * distanceY);
      if (distance < 1) distance = 1;

      const force = (distance - 220) * mass[particleB] / distance;
      accelerationX += force * distanceX;
      accelerationY += force * distanceY;
    }
  }

  velocityX[particleA] = velocityX[particleA] * .80 + accelerationX * mass[particleA];
  velocityY[particleA] = velocityY[particleA] * .80 + accelerationY * mass[particleA];
}

for (let particle = 0; particle < mass.length; particle++) {
  positionX[particle] += velocityX[particle];
  positionY[particle] += velocityY[particle];

  ellipse(positionX[particle], positionY[particle], mass[particle] * 1000, mass[particle] * 1000);
}
}



/////////////////////////// Adding particles //////////////////////////////////////////////////////////////////////////

function addNewParticle() {
mass.push(random(0.010, 0.04));
positionX.push(mouseX);
positionY.push(mouseY);
velocityX.push(0);
velocityY.push(0);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function mouseClicked() {
addNewParticle();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function mouseDragged() {
addNewParticle();
}
