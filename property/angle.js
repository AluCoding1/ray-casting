class Angle {
   constructor(length) {
      this.length = length;
   }
   setBlock(block){
      this.block=block;
   }
   colision(point){
      let block=this.block;
      let bPosi = block.position;
      let bSize = block.size;
      let [x,y]=[point.x,point.y];
      let [x1,y1]=[bPosi.x,bPosi.y];
      let closestX=Math.max(x1,Math.min(x,x1+bSize.width))
      let closestY=Math.max(y1,Math.min(y,y1+bSize.height));
      let changeX=closestX-x;
      let changeY=closestY-y;
      let distance=changeX*changeX+changeY*changeY;
      return distance<this.length*this.length
   }
   ratio(first) {
      let posi=this.block.position;
      let size=this.block.size;
      let [x, y] = [first.x, first.y];
      let [x1, y1] = [posi.x+size.width/2,posi.y+size.height/2];
      let changeX = x1 - x;
      let changeY = y1 - y;
      let check_place = this.colision(first);
      if (check_place) {
         let angleRadians = Math.atan2(changeY, changeX);
         let angleDegrees = angleRadians * (180 / Math.PI);
         if (angleDegrees < 0) {
            angleDegrees += 360;
         }
         return angleDegrees;
      } else {
         return "empty"
      }

   }
}
