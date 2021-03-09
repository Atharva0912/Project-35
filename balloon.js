class Balloon{
    constructor(x,y,width,height){
        var options={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.w = width;
        this.h = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        imageMode(CENTER); 
        strokeWeight(0);
        rect(this.image,0,0,this.w,this.h);    
        pop(); 
    }
}