var ball = {
  x: 500,
  y: 300,
  xspeed: 4,
  yspeed: -3,
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  if (keyIsPressed)
  background(255)
  move();
  bounce();
  display();
}

function move() {  
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
  
}

function bounce() {
  
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
   }
}

function display() { 
  fill(255);
  if (keyIsPressed)
  fill(0);
  ellipse(ball.x, ball.y, 24, 24)
}