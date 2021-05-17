class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          isStatic : false 
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255 ;
      this.image = loadImage("block.png");
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      if(this.body.speed < 5){
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        
      }else {
        
        World.remove(world,this.body);
        this.visibility = this.visibility - 5 ;
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        tint(255,this.visibility);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
      }
    }
}