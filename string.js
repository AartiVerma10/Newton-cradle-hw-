class String{
    constructor(body1,body2,offsetX,offsetY){
        
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:offsetY}
        
        }

        this.String= Constraint.create(options);
        World.add(world, this.String);
    }
    display(){
        var pointA = this.String.bodyA.position;
        var pointB = this.String.bodyB.position;

        var anchor1x=pointA.x;
        var anchor1y=pointA.y;

        var anchor2x=pointB.x+this.offsetX;
        var anchor2y=pointB.y+this.offsetY;
 
      
        line(anchor1x,anchor1y-25,anchor2x,anchor2y);
    }
}