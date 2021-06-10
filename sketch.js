var bullet,wall,thickness;
var wall2,wall3,wall4;
var bullet2,bullet3,bullet4;
var speed1,speed2,speed3,speed4,weight;
var line1,line2,line3,line4,line5;

function setup() {
  createCanvas(1400,400);
  
  thickness=random(22,83);

  line1=createSprite(600,50,1500,5);
  line1.shapeColor="white";

  line2=createSprite(600,120,1500,5);
  line2.shapeColor="white";

  line3=createSprite(600,190,1500,5);
  line3.shapeColor="white";
  
  line4=createSprite(600,260,1500,5);
  line4.shapeColor="white";

  line5=createSprite(600,340,1500,5);
  line5.shapeColor="white";
 
  speed1=random(223,321);
  speed2=random(230,321);
  speed3=random(200,220);
  speed4=random(150,200);
  
  
  weight=random(30,52);

  bullet=createSprite(50,85,20,20);
  bullet.shapeColor="white";
  bullet2=createSprite(50,160,20,20);
  bullet2.shapeColor="white";
  bullet3=createSprite(50,230,20,20);
  bullet3.shapeColor="white";
  bullet4=createSprite(50,300,20,20);
  bullet4.shapeColor="white";

  wall=createSprite(1300,85,thickness,55);
  wall.shapeColor="grey";

  wall2=createSprite(1300,155,thickness,55);
  wall2.shapeColor="grey";

  wall3=createSprite(1300,225,thickness,55);
  wall3.shapeColor="grey";

  wall4=createSprite(1300,300,thickness,55);
  wall4.shapeColor="grey";
}

function draw() {
  background(0);

  bullet.velocityX=speed1;
  bullet2.velocityX=speed2;
  bullet3.velocityX=speed3;
  bullet4.velocityX=speed4;

  bullet.collide(wall);
  bullet2.collide(wall2);
  bullet3.collide(wall3);
  bullet4.collide(wall4);


  if(wall.x-bullet.x<(wall.width+bullet.width)/2){
    bullet.velocityX=0;

    var damage=(0.5*weight*speed1*speed1)/(thickness*thickness*thickness);
    
      if(damage>10){
        wall.shapeColor=color(235,67,52);  
      }

      if(damage<10){
        wall.shapeColor=color(110,235,52);  
      }

  }

  if(wall2.x-bullet2.x<(wall2.width+bullet2.width)/2){
    bullet2.velocityX=0;

    var damage=(0.5*weight*speed2*speed2)/(thickness*thickness*thickness);
    
      if(damage>10){
        wall2.shapeColor=color(235,67,52);  
      }

      if(damage<10){
        wall2.shapeColor=color(110,235,52);  
      }
     
  }


  if(wall3.x-bullet3.x<(wall3.width+bullet3.width)/2){
    bullet3.velocityX=0;

    var damage=(0.5*weight*speed3*speed3)/(thickness*thickness*thickness);
    
      if(damage>10){
        wall3.shapeColor=color(235,67,52);  
      }

      if(damage<10){
        wall3.shapeColor=color(110,235,52);  
      }
    }


  if(wall4.x-bullet4.x<(wall4.width+bullet4.width)/2){
    bullet4.velocityX=0;

    var damage=(0.5*weight*speed4*speed4)/(thickness*thickness*thickness);
    
      if(damage>10){
        wall4.shapeColor=color(235,67,52);  
      }

      if(damage<10){
        wall4.shapeColor=color(110,235,52);  
      }

  }
  drawSprites();
}

