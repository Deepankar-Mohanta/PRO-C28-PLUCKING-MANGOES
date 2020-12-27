class Boy{
  constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      rect(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.x=x;
      this.y=y;
   
      this.image = loadImage("sprites/boy.png");
      
    }
    display(){
     
      imageMode(CENTER);
      image(this.image, this.x, this.y, this.width, this.height);
     
    }
}