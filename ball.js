class Ball{
    constructor(x){
        var options={
            isStatic:false,
            'restitution':1,
            'friction':0.5,
            'density':5
        }
        this.body=Bodies.circle(x,400,20,options);
        this.radius=50;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        rectMode(CENTER);
        push();
        fill("red");
        circle(pos.x,pos.y,this.radius);
        pop();
           
    }
}