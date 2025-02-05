class Boxs {
   constructor(num) {
      this.num = num;
      this.size = {width:10,height:10};
      this.color = "rgb(125,0,255)";
      this.boxs = [];
   }
   setSize(size){
      this.size=size;
   }
   setColor(color){
      this.color=color
   }
   CreateBox(){
      for (var i = 0; i < this.num; i++) {
         let x_axis = Math.random() * width*10;
         let y_axis = Math.random() * height*10;
         let box = {
            position: vector(x_axis, y_axis),
            size: this.size
         };
         this.boxs.push(box);
      }
   }
   draw(ctx){
      for (var i = 0; i < this.boxs.length; i++) {
         let box=this.boxs[i];
         ctx.fillStyle=this.color;
         ctx.fillRect(
            box.position.x,box.position.y,
            box.size.width,box.size.height
            )
      }
   }
}