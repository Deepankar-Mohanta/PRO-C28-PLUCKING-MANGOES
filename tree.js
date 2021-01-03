class Tree{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        rect(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.x=x;
        this.y=y;
     
        this.image = loadImage("tree.png");
        
      }
      display(){
       
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
       
      }
  }