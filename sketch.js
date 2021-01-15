
var canvas;
var music;
var block1,block2,block3,block4;
var ball;
var edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1=createSprite(0,580,360,30);
surface1.shapeColor = rgb(0,0,255);

surface2=createSprite(295,580,200,30);
surface2.shapeColor = rgb(255,128,0);

surface3=createSprite(515,580,200,30);
surface3.shapeColor = rgb(153,0,76);

surface4=createSprite(740,580,220,30);
surface4.shapeColor = rgb(0,100,0);


    //create box sprite and give velocity
ball=createSprite(random(20,750),100,40,40)
ball.shapeColor = rgb(255,255,255);
ball.velocityY=9;
ball.velocityX=4
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites()
ball.bounceOff(edges);

  
if(surface1.isTouching(ball)){
    ball.shapeColor = rgb(0,0,255);
   
    music.play();
}
if(surface2.isTouching(ball)){
    ball.shapeColor = rgb(225,128,0);
    ball.velocityX=0;
    ball.velocityY=0;

    music.stop();
    }
    if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
        ball.shapeColor = rgb(153,0,76);
    }

    if(surface4.isTouching(ball) && ball.bounceOff(surface4)){
        ball.shapeColor = rgb(0,100,0);
    }
drawSprites()
    }
