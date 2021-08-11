class Plinkos {
    constructor(x,y,r){
        var options = {
            'isStatic' : true,
            'restitution' : 1,
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        ellipseMode(RADIUS);
        fill("blue");
        translate(pos.x, pos.y);
        rotate(angle);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}