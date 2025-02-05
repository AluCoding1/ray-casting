class  RayTracing{
   constructor(blocks,distance) {
      this.blocks = blocks;
      this.distance = distance;
      this.radian=Math.PI/180;
      
   }
   setRay(start,ends,angle){
      this.start=start;
      this.ends=ends;
      this.angle=angle
   }
   update(){
      let intersect=new Intersect(this.start);
      let angle_ratio=new Angle(this.distance);
      let minmum=[];
      for (var i = 0; i < this.blocks.length; i++) {
         let block=this.blocks[i]
         let bPosi=block.position;
         let bSize=block.size;
         let info;
         if (i!=0) {
            angle_ratio.setBlock(block);
            info=angle_ratio.ratio(
               this.start
               )
         }
         let cycle,stop;
         if (info!="empty") {
            info=Math.floor(info);
            cycle = [];
            cycle[0]=info;
            cycle[1]=info;
            stop = 0;
            
         }
         for (var v = 0; v < this.ends.length; v++) {
            if (info=="empty") {
               break;
            }
            if (i==0) {
               let point = this.ends[v]
               minmum[v] = this.distance;
               let result = intersect.intersect(this.angle[v], this.blocks[i])
               if (minmum[v] > result.t) {
                  minmum[v] = result.t;
                  this.ends[v] = result.point;
               }
            }else{
               if (stop>=2) {
                  break;
               }
               let index=cycle[stop]
               if (cycle[stop]>=360 && stop==0) {
                  cycle[stop]=0;
                  index=0;
               }
               if (index<0 && stop==1) {
                  cycle[stop]=359
                  index=0;
               }
               
               let result=intersect.intersect(this.angle[index],this.blocks[i],index)
               
               if (result) {
                  if (minmum[index]>result.t) {
                     minmum[index]=result.t;
                     this.ends[index]=result.point;
                  }
                  if (stop == 0) {
                     cycle[0] += 1
                  } else if (stop == 1) {
                     cycle[1] -= 1
                  }
            }else{
               stop+=1
            }
               
            }
            
         }
      }
   }
}