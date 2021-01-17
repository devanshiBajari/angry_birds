class box{
constructor(x , y , width , height){
    var options = {
       restituion: 0.5,
       density: 1,
       friction: 0.2 
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    this.width = width;
    this.height=height;
}

display(){
    var position = this.body.position;
    var angle = this.body.angle;
    push();
    translate(position.x,position.y);
    rotate(angle);
    rectMode(CENTER);
    stroke("pink");
    strokeWeight(3);
    fill ("green");
    rect(0,0,this.width,this.height);
    pop();

}

}