class rubberband{
    constructor(bodyA, pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.009,
            length: 15
        }
    this.pointB=pointB;
    this.rope=Constraint.create(option);
    World.add(world, this.rope)
    }

    attach(body){
        this.rope.bodyA=body;
    }

    fly(){
        this.rope.bodyA=null;
    }

display(){
    if(this.rope.bodyA){
    var pointA=this.rope.bodyA.position;
    var pointB=this.pointB;
    line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
    
}

}