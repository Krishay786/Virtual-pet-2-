var dog,sadDog,happyDog;
var feed,addFood,foodObj;

function preload(){
  sadDog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton("feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog)

  addFood = createButton("addFood");
  addFood.position(800,95);


}

function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
   Food : foodObj.getFoodStock(),
   lastFed : hour() 
  })
}

function draw() {
  background(46,139,87);
  drawSprites();
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x = 0
  }
  else{x=x-1}
  database.ref('/').update({
    Food : x 
  })
}
