class Log {
    constructor(x,y,width,height,angle){
        var options={
            restitution: 0.5,
            density: 1,
            friction: 0.2
            //isStatic:true
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        Matter.Body.setAngle(this.body,angle);

    }

    display(){
        var position=this.body.position;
        var angle=this.body.angle;
        push();
        translate(position.x,position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        fill("white"); 
        rect(0,0,this.width,this.height);
        pop();
    }
}