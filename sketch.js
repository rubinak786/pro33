const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
var engine, world;
var ball2
var g1,g2,g3,g4;
var dv1,dv2,dv3,dv4,dv5,dv6,dv7
var particles = [];
var plinkos   = [];
var divisions = [];
var divisionHeight =300;
var score = 0
var count = 0
var gameState ="Start"
var particles1
function setup() {
  createCanvas(400,700);
  engine= Engine.create();// world
  world= engine.world;

  g1 =new Ground(2,350,5,700)
  g2=new Ground(200,655,400,5)
  g3=new Ground(395,350,5,700)
  dv1=new Divisions(5,575,3,150)
  dv2=new Divisions(70,575,3,150)
  dv3=new Divisions(135,575,3,150)
  dv4=new Divisions(195,575,3,150)
  dv5=new Divisions(255,575,3,150)
  dv6=new Divisions(320,575,3,150)
  dv7=new Divisions(390,575,3,150)
  b=new Divisions(198,650,390,5)
  
  for (var k=8;k<=width;k=k+40){
    plinkos.push(new Plinko(k,50,10))
  
  }

  for (var S=0;S<=width;S=S+40){
    plinkos.push(new Plinko(S,100,10))
  
  }

  for (var A=8;A<=width;A=A+40){
    plinkos.push(new Plinko(A,150,10))
  
  }

  for (var B=0;B<=width;B=B+40){
    plinkos.push(new Plinko(B,200,10))
  
  }

  for (var C=8;C<=width;C=C+40){
      divisions.push(new Plinko(C,250,10))
  
  }

  for (var D=0;D<=width;D=D+40){
    divisions.push(new Plinko(D,300,10))

}

for (var E=8;E<=width;E=E+40){
  divisions.push(new Plinko(E,350,10))

}

for (var F=0;F<=width;F=F+40){
  divisions.push(new Plinko(F,400,10))

}

}
function draw() {
  background(0); 
   
  Engine.update(engine)
  text ("score:"+score,10,30)
  text ("500",20,500)
  text ("500",90,500)
  text ("200",155,500)
  text ("200",220,500)
  text ("100",280,500)
  text ("100",340,500)
  if (gameState=="end"){
    text("GAMEOVER",200,200)
  }
  if (frameCount%60===0){
    particles.push(new Particle(random(30,700),5,5));
  }
  for (var i =0 ;i < particles.length;i++){
    particles[i].display()
  
   }
   for (var k =0 ;k < plinkos.length;k++){
    plinkos[k].display()
   
   }
   for (var S =0 ;S < plinkos.length;S++){
    plinkos[S].display()
   
   }
   for (var A =0 ;A < plinkos.length;A++){
    plinkos[A].display()
   
   }
   for (var B =0 ;B < plinkos.length;B++){
    plinkos[B].display()
   
   }
   for (var C =0 ;C < divisions.length;C++){
    divisions[C].display()
   
   }
   for (var D =0 ;D < divisions.length;D++){
    divisions[D].display()
   
   }
   for (var E =0 ;E < divisions.length;E++){
    divisions[E].display()
   
   }
   for (var F =0 ;F < divisions.length;F++){
    divisions[F].display()
  
   }
   

  g1.display()
  g2.display()
  g3.display()
  dv1.display()
  dv2.display()
  dv3.display()
  dv4.display()
  dv5.display()
  dv6.display()
  dv7.display()
  b.display()
  if (particles1!=null){
    particles1.display();

    if (particles1.body.position.y>600){

      if (particles1.body.position.x<100){

       score=score+500;
       particles1=null;
       if (count>=5) gameState="end"
      }
      else if (particles1.body.position.x < 400 && particles1.body.position.x > 101 ) 
              {
                    score = score + 100;
                    particles1=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particles1.body.position.x < 700 && particle.body.position.x >401 )
              {
                    score = score + 200;
                    particles1=null;
                    if ( count>= 5)  gameState ="end";

              }      
              

    }
  }

}
function mousePressed(){
  if (gameState!=="end"){
    count++
    particles1=new Particle(mouseX,10,10,10)
  }
}