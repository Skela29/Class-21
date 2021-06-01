var movingrect, fixedrect1,fixedrect2,fixedrect3,fixedrect4, rect1,rect2

function setup() {
  createCanvas(800,400);
  fixedrect1 = createSprite(400, 200, 50, 50);
  fixedrect1.shapeColor = "green"
  fixedrect2 = createSprite(300, 200, 50, 50);
  fixedrect2.shapeColor = "green"
  fixedrect3= createSprite(500, 200, 50, 50);
  fixedrect3.shapeColor = "green"
  fixedrect4 = createSprite(600, 200, 50, 50);
  fixedrect4.shapeColor = "green"

  rect1 = createSprite(400, 200, 50, 50);
  rect1.velocityX = 2
  rect2 = createSprite(700, 200, 70, 70);
  rect2.velocityX = -2

  movingrect = createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "green"
}

function draw() {
  background(255,255,255); 
  movingrect.x = mouseX
  movingrect.y = mouseY
  bounceOff(rect1,rect2);
if(isTouching(fixedrect4,movingrect)){
  movingrect.shapeColor = "blue"
}
else{
movingrect.shapeColor = "green"
}
  
  drawSprites();
}
