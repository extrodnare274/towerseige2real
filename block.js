class Block  {
  constructor(x, y, width, height) {
    var options = {
       
      
    }
    this.blockImage = loadImage("block.png")   
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visiblity = 255
  }

 display(){
   console.log(this.body.speed);
   if(this.body.speed < 3){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 10;
     tint(255,this.Visiblity);
     image(this.blockImage, this.body.position.x, this.body.position.y, 30, 30);

     pop();
   }
   
 }



};
