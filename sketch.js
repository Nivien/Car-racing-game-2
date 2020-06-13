var canvas, backgroundImage;

var allPlayers;
var gameState = 0;
var playerCount;

var database;

var form, player, game;

var canvasWidth, canvasHeight;

var car1, car2, car3, car4, cars

var carImg1, carImg2, carImg3, carImg4

var backgroundImg;

var track;

function preload(){
  carImg1 = loadImage("images/car1.png");
  carImg2 = loadImage("images/car2.png");
  carImg3 = loadImage("images/car3.png");
  carImg4 = loadImage("images/car4.png");

  backgroundImg = loadImage("images/background.jpg");

  track = loadImage("images/track.png");
}

function setup(){

  canvasWidth = windowWidth - 50;
  canvasHeight = windowHeight - 50;

  canvas = createCanvas(canvasWidth,canvasHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  if(playerCount === 4){
    game.update(1);
  } 

  if (gameState === 1){
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
}
