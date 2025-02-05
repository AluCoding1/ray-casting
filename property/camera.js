class Camera {
   constructor() {
      this.scale=1;
      this.offsetX=0;
      this.offsetY=0;
      this.lastDistance=0;
      this.isDraging=false;
      this.lastX=0;
      this.lastY=0;
   }
   touchDistance(touches){
      let dx = touches[0].clientX - touches[1].clientX;
      let dy = touches[0].clientY - touches[1].clientY;
      return Math.sqrt(dx * dx + dy * dy)
   }
   touchStart(e){
      if (e.touches.length === 2) {
         this.lastDistance = this.touchDistance(e.touches)
         this.isDraging = true;
         let midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
         let midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
         this.lastX = midX;
         this.lastY = midY;
      }
   }
   touchMove(e){
      if (e.touches.length === 2) {
         let distance = this.touchDistance(e.touches);
         let deltaScale = distance / this.lastDistance;
         this.scale *= deltaScale;
         this.scale = Math.min(Math.max(0.1, this.scale), 5);
      
         this.lastDistance = distance;
      
      
         let midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
         let midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      
         if (this.isDraging) {
            this.offsetX += (midX - this.lastX);
            this.offsetY += (midY - this.lastY);
         }
      
         this.lastX = midX;
         this.lastY = midY;
      }
   }
   touchEnd(){
      this.isDraging=false;
   }
   position_draw(touches){
      let first = (touches.clientX / this.scale) - this.offsetX
      let second = (touches.clientY / this.scale) - this.offsetY
      return [second, first];
   }
}
