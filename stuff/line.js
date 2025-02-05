class Line {
   constructor(start,end) {
      this.start = start;
      this.end = end;
      this.color = "blue";
      this.width = 0.5;
   }
   setColor(color){
      this.color=color;
   }
   setWidth(width){
      this.width=width;
   }
   draw(ctx){
      ctx.strokeStyle=this.color
      ctx.lineWidth=this.width;
      ctx.beginPath();
      ctx.moveTo(this.start.x,this.start.y);
      ctx.lineTo(this.end.x,this.end.y);
      ctx.stroke();
   }
}