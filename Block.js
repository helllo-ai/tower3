class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibilty=255
        this.path=[]
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
       this.visibilty=this.visibilty-5
        var position=[this.body.position.x,this.body.position.y]
        this.path.push(position)
        for(var i=3; i<this.path.length; i=i+1)
        translate(pos.x, pos.y);
        tint(0, 153, 204);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
      score(){
        if (this.visiblity < 0 && this.visiblity > -105){
          score++;
        }
      }
}
