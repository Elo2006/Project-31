class Ground{
    constructor(x,y,w,h){
        var options = {
        isStatic: true}
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body)
        
        }
        display(){
            var pos = this.body.position;
            fill("#FFF9F9");
            rect(pos.x,pos.y,this.w,this.h);
        }
};