const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var divisions = [];
var divisionHeight = 20;
var plinkos = [];

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var options = {isStatic:true}
  ground = Bodies.rectangle(400,395,1000,10,options);
  World.add(world, ground);

  for(k=0; k<=width; k=k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j=40; j<=width; j=j+50){
    plinkos.push(new Plinkos(j, 55))
  }
  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinkos(j, 105))
  }


  console.log(particles.length);

}

function draw() {
  background("black");
  Engine.update(engine);

  fill("green");
  rect(ground.position.x, ground.position.y, 20000, 10);

  for(var k=0; k<divisions.length;k++){
    divisions[k].display();
  }
  for(var j=0; j<plinkos.length; j++){
    plinkos[j].display();
  }
  if(frameCount % 10 === 0){
    particles.push(new Particles(random(5,795),0));
  }
  for(var l=0; l<particles.length; l=l+1){
    particles[l].display();
  }
}