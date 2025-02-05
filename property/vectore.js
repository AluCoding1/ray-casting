function vector(x_axis, y_axis) {
   return {
      x: x_axis,
      y: y_axis,
      set_vector:function(value){
         this.x=value.x;
         this.y=value.y;
      },
      copy: function() {
         return vector(this.x, this.y)
      },
      add: function(num, axis = 0) {
         let start=vector(this.x,this.y)
         if (axis == 0) {
            start.x += num.x;
            start.y += num.y;
         } else if (axis == 1) {
            start.x += num
         } else if (axis == 2) {
            start.y += num
         }
         return start
      },
      sub:function(num,axis=0){
         let start=vector(this.x,this.y)
         if (axis == 0) {
            start.x -= num.x;
            start.y -= num.y;
         } else if (axis == 1) {
            start.x -= num
         } else if (axis == 2) {
            start.y -= num
         }
         return start
      },
      mul:function(num,axis=0){
         let start=vector(this.x,this.y)
         if (axis == 0) {
            start.x *= num.x;
            start.y *= num.y;
         } else if (axis == 1) {
            start.x *= num
         } else if (axis == 2) {
            start.y *= num
         }
         return start
      },
      zNaN:function(first,second){
         if (first==0,second==0) {
            return 0
         }else{
            return first/second
         }
      },
      div:function(num,axis=0){
         let start=vector(this.x,this.y)
         if (axis == 0) {
            start.x = this.zNaN(start.x,num.x);
            start.y = this.zNaN(start.y,num.y);
         } else if (axis == 1) {
            start.x = this.zNaN(start.x,num)
         } else if (axis == 2) {
            start.y = this.zNaN(start.y,num)
         }
         return start
      }
      
   }
}
