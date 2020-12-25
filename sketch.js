const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
var backgroundImg
var score = 0
var bg="bg.jpg"

function preload() {
    getbackgrounding ();
     
}
function setup() {
  var canvas = createCanvas(1200, 600)
  engine = Engine.create();
  world = engine.world;

  // shooter,polygon
  polygon = new Polygon(150, 200, 20);

  shooter = new Slingshot(polygon.body, { x: 220, y: 292 })

  //PART ONE

  //level three
  block = new Box(930, 235, 30, 40)
  block2 = new Box(960, 235, 30, 40)
  block3 = new Box(990, 235, 30, 40)
  block4 = new Box(1020, 235, 30, 40)
  block5 = new Box(1050, 235, 30, 40)

  //level two
  block11 = new Box(960, 195, 30, 40)
  block12 = new Box(990, 195, 30, 40)
  block13 = new Box(1020, 195, 30, 40)

  //top
  block20 = new Box(990, 155, 30, 40)

  //PART TWO

  //level 4

  bl1 = new Box(468, 449, 30, 40)
  bl2 = new Box(498, 449, 30, 40)
  bl3 = new Box(528, 449, 30, 40)
  bl4 = new Box(558, 449, 30, 40)
  bl5 = new Box(588, 449, 30, 40)
  bl6 = new Box(618, 449, 30, 40)
  bl7 = new Box(648, 449, 30, 40)

  //level 3

  bl8 = new Box(498, 409, 30, 40)
  bl9 = new Box(528, 409, 30, 40)
  bl10 = new Box(558, 409, 30, 40)
  bl11 = new Box(588, 409, 30, 40)
  bl12 = new Box(618, 409, 30, 40)

  //level 2

  bl13 = new Box(528, 369, 30, 40)
  bl14 = new Box(558, 369, 30, 40)
  bl15 = new Box(588, 369, 30, 40)

  //top
  bl16 = new Box(558, 329, 30, 40)


  //GROUNDS
  ground = new Ground(600, height, 1200, 20);
  ground1 = new Ground(558, 459, 250, 10);
  ground2 = new Ground(990, 270, 200, 10);
}

function draw() {
  if(backgroundImg)
    background(backgroundImg);
  fill("white")
  textSize(30)
  text("PRESS SPACE TO GET ONE MORE CHANCE!!", 150, 100)

  fill("white")
  textSize(30)
  text("SCORE:" + score, 750, 40)

  Engine.update(engine);

  //level three
  fill(251, 66, 124)

  block.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();



  //LEVEL TWO
  fill("yellow")
  block11.display()
  block12.display()
  block13.display()

  block11.score()
  block12.score()
  block13.score()


  //TOP

  fill(251, 66, 124)
  block20.display()

  block20.score()

  //PART TWO
  //LEVEL 4
  fill("yellow")
  bl1.display();
  bl2.display();
  bl3.display();
  bl4.display();
  bl5.display();
  bl6.display();
  bl7.display();

  bl1.score();
  bl2.score();
  bl3.score();
  bl4.score();
  bl5.score();
  bl6.score();
  bl7.score();

  //LEVEL 3
  fill(251, 66, 124)
  bl8.display();
  bl9.display();
  bl10.display();
  bl11.display();
  bl12.display();

  bl8.score();
  bl9.score();
  bl10.score();
  bl11.score();
  bl12.score();

  //LEVEL 2
  fill("yellow")
  bl13.display();
  bl14.display();
  bl15.display();

  bl13.score();
  bl14.score();
  bl15.score();

  //TOP
  fill(251, 66, 124)
  bl16.display();
  bl16.score();





  //GROUNDS
  ground.display();
  ground1.display();
  ground2.display();

  shooter.display();
  polygon.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  shooter.fly()


}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(polygon.body, { x: 220, y: 292 })
    shooter.attach(polygon.body);

  }

}

async function getbackgrounding (){
   var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata ")
  var responseJSON=await response.json()
  console.log(responseJSON)
  var hour=responseJSON.datetime.slice(11,13)
  if (hour>=06 && hour<=19){
  bg=("bg.jpg")
  
  }
  else{
      bg=("bg2.jpg")
  }
  console.log(hour)
  backgroundImg=loadImage(bg)
}