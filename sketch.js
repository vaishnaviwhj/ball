var fixedRect, movingRect;
var b1,b2,b3,b4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  b1 = createSprite(100, 100, 50, 80);
  b1.shapeColor = "purple";
  b2 = createSprite(200, 100, 50, 80);
  b2.shapeColor = "purple";
  b3 = createSprite(300, 100, 50, 80);
  b3.shapeColor = "purple";
  b4 = createSprite(400, 100, 50, 80);
  b4.shapeColor = "purple";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 
if (isTouching(movingRect,b2)) {
  
  movingRect.shapeColor = "red";
  b2.shapeColor = "red";
}
else {
  movingRect.shapeColor = "purple";
  b2.shapeColor = "purple";

}

  drawSprites();
}

