class Ray {
   constructor(point,distance) {
      this.point = point;
      this.distance = distance;
      this.radiant = Math.PI/180;
      this.color = "blue";
      this.width = 2;
      this.angle = [];
      this.endPoints = [];
      for (var i = 0; i < 360; i++) {
         this.angle.push(
            vector(
            Math.cos(i*this.radiant),
            Math.sin(i*this.radiant)
            )
         )
      }
   }
   move(point){
      this.point=point;
      this.endPoints=[];
   }
   setColor(color) {
      this.color = color;
   }
   setWidth(width) {
      this.width = width;
   }
   endPoint(angle){
      let end_point = vector(
         this.point.x+this.distance*angle.x,
         this.point.y+this.distance*angle.y
         );
      return end_point;
      
   }
   update(){
      this.endPoints=[]
      for (var i = 0; i < 360; i++) {
         let end_point=this.endPoint(this.angle[i]);
         this.endPoints.push(end_point);
      }
   }
   draw(ctx){
      for (var i = 0; i < 360; i++) {
         let end_point=this.endPoints[i];
         let line=new Line(this.point,end_point);
         line.setColor(this.color);
         line.setWidth(this.width);
         line.draw(ctx);
      }
   }
}