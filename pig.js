class Pig {
    constructor(x,y){
        var options={
            restituion: 0.5,
            density: 1,
            friction: 0.2
        }

        this.body=Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
        this.width=50;
        this.height=50;

    }

    display(){
        var position=this.body.position;
        var angle = this.angle;
        push();
        translate(position.x,position.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("white");
        strokeWeight(3);
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop();
    }
}