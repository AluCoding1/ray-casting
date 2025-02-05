class FPS {
   constructor(position,color) {
      this.position=position;
      this.color=color;
      this.pastTime=0;
      this.fps=0;
      this.frameCount=0;
   }
   update(){
      let current = performance.now();
      let delta = current - this.pastTime;
      this.frameCount += 1;
      if (delta > 1000) {
         this.fps = this.frameCount;
         this.frameCount = 0;
         this.pastTime = current
      }
   }
   draw(ctx){
      ctx.font = "30px Arial";
      ctx.fillStyle = this.color;
      ctx.lineWidth = 4;
      ctx.fillText(`fbs ${this.fps}`, this.position.x, this.position.y);
      ctx.fill();
   }
}
