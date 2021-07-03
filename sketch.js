var garden, rabbit;
var gardenImg, rabbitImg;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = mouseX
  edges = createEdgeSprites();
  rabbit.collide(edges[3]);

  spawnApples();

  spawnLeafs();

  drawSprites();
}

function spawnApples() {
  if (frameCount % 50 === 0) {
    apple = createSprite(200, 0, 50, 50);
    apple.addImage("appleImg", appleImg)
    apple.scale = 0.1
    apple.x = Math.round(random(50, 350))
    apple.velocityY = +5;


  }

}

function spawnLeafs() {
  if (frameCount % 130 === 0) {
    leaf = createSprite(200, 0, 50, 50);
    leaf.addImage("leaf", leafImg)
    leaf.scale = 0.1
    leaf.x = Math.round(random(50, 350))
    leaf.velocityY = +5;
  }

}

