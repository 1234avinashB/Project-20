var car, wall, speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2)
  car.velocityX = speed;
  car.shapeColor = "lightblue";
  wall.shapeColor = "brown";
}

function draw() {
  background("black"); 
  if(isTouching(car,wall)){
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;
    if(deformation > 180){
      car.shapeColor = "red";
    }
    if(deformation < 180 && deformation > 100) {
      car.shapeColor = "yellow";
    }
    if(deformation < 100) {
      car.shapeColor = "green";
    }
  }
  drawSprites();
}

function isTouching (object1,object2){
  if(object1.x-object2.x < object1.width/2 + object2.width/2 
    && object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2){
      return true;
} else{
      return false;
}
}