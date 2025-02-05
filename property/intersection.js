class Intersect {
   constructor(start) {
      this.start=start;
   }
   intersect(end,block,i=359){
      let tx1=(block.position.x-this.start.x)/end.x;
      let tx2=(block.position.x+block.size.width-this.start.x)/end.x
      
      let ty1=(block.position.y-this.start.y)/end.y;
      let ty2=(block.position.y+block.size.height-this.start.y)/end.y;
   
      
      
      let tmin=Math.max(Math.min(tx1,tx2),Math.min(ty1,ty2));
      let tmax=Math.min(Math.max(tx1,tx2),Math.max(ty1,ty2));
      if (tmax<0 || tmax<tmin) {
         
         return false;
      }
      let dt=this.distance-tmin
      return{
         t:tmin,
         point:vector(this.start.x+end.x*tmin,this.start.y+end.y*tmin)
      }
   }
}