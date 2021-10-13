const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgImg, background, snow;
var engine, world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  bgImg = loadImage("snow1.jpg");

}

function draw() {
  Engine.update(engine);
  background = createSprite(255,255,255);  
  background.addImage(bgImg)
  drawSprites();
}