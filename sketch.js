let bullets=[];
let enemies=[];
var score =0;
var Level=0;

var maxLevel=0;

function setup() {
  createCanvas(700, 550);
  
 setInterval(function(){
    for(let i=0;i<=0.1;i++){
    let enemy={
      x:random(0,width),
      y:random(-500,0)
    }
  
    enemies.push(enemy);
  }
 },400)
  
  setInterval(function(){
    maxLevel=max(maxLevel,Level);
  },500)
  

}

function draw() {
  textSize(25)
  background(200);
   
  var posx=mouseX;
  var posy=mouseY;
  //var posy=height-50;
  fill(0,0,0,150);
 circle(posx,posy,15);
  fill(251, 200, 65,150);
 rect(posx,posy-30,2,15)
  for(let bullet of bullets){
    fill(183, 175, 5);
    bullet.y-=10;
    rect(bullet.x,bullet.y,2,25);
  }
  
  for(let enemy of enemies){
    fill(0,0,0,50);
    enemy.y+=5;
    rect(enemy.x,enemy.y,20);
    if((enemy.y>height)||(dist(enemy.x,enemy.y,posx,posy)<20)){
      score--;
      enemies.splice(enemies.indexOf(enemy),1);
    }
    if(checkScore()==true){
      fill(200,0,0);
      text("Game Over",300,150);
      if(maxLevel>0)
        text("Your Max Level: "+maxLevel,270,175);
      else {
         
        text("Your Max Level: "+maxLevel,275,175);
       
        
      }
      
      noLoop();
    }
    // if(score>=500){
    //   fill( 50,225,100);
    //   text("Congratulations",250,150);
    //   noLoop();
    // }

  }
    for(let enemy of enemies){
      for(let bullet of bullets){
        if(dist(enemy.x,enemy.y,bullet.x,bullet.y)<20){
          enemies.splice(enemies.indexOf(enemy),1);
          bullets.splice(bullets.indexOf(bullet),1);
          score++;
          
        }
      }
  }
  if(score<=0){
    fill(225,0,0);
    text("Score: "+score,25,25);
  }
  if(score>0){
     fill(0,175,0);
    text("Score: "+score,25,25);
  }
  if(score>0)
    Level=floor((score/50))+1;
  else Level=0;
  
  
    text("Current Level:"+Level,width-195,25);
 
    
}

setInterval(function(){
  let bullet={
    x:mouseX,
    y:mouseY
  }
  bullets.push(bullet);
},200)

function checkScore(){
  if(score<0)
    return true;
  else return false;
}


// function mousePressed(){
//   let bullet={
//     x:mouseX,
//     y:mouseY
//   }
//   bullets.push(bullet);
// }



