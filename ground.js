class Ground{
    constructor(){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(430,100,400,40,option);
        this.width=430;
        this.height=40;
        World.add(world,this.body);
    }
    display(){

        var pos = this.body.position;

        push();
        fill("yellow");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
           
    }
}