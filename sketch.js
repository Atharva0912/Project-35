var balloon,balloonImg,database,balloonposition;
var backgroundImg;

function preload(){
 backgroundImg = loadImage("Hot Air Ballon-01.png");
 balloonImg = loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png");
}

function setup() {
  database = firebase.database();
  createCanvas(1600,800);
  balloon = createSprite(600,200,10,10);
  balloon.addAnimation("balloon",balloonImg);
  balloon.scale = 0.5;
  balloonposition = database.ref('balloon/height');
  balloonposition.on("value",readHeight,showError);
}

function draw() {
  background(backgroundImg);  
  if(keyDown("D")){
    balloon.x = balloon.x + 10;
  }
  else if(keyDown("A")){
    balloon.x = balloon.x - 10;
  }
  else if(keyDown("W")){
    balloon.y = balloon.y - 10;
  }
  else if(keyDown("S")){
    balloon.y = balloon.y + 10;
  }
  drawSprites();
}

function updateHeight(x,y){
database.ref('balloon/height').set({
  'x': height.x + x,
  'y': height.y + y
})
}

function readHeight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
}

function showError(){
  console.log("Error in writing the database");
}
