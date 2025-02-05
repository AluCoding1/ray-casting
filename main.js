let board;
let ctx;
let width;
let height;
let row=20;
let columen=20;
window.addEventListener("load",()=>{
   board=document.getElementById("board");
   ctx=board.getContext("2d");
   width=board.width=window.innerWidth;
   height=board.height=window.innerHeight;
   let distance=2000;
   let camera=new Camera();
   let fps=new FPS({x:40,y:40},"blue");
   let first=vector(width/2,height/2);
   let ray=new Ray(first,distance);
   ray.color="rgb(180,0,120,0.02)";
   ray.width=100;
   let boxs=new Boxs(500);
   boxs.setSize({width:40,height:40})
   boxs.CreateBox()
   let raytracing=new RayTracing(boxs.boxs,distance)
   board.addEventListener("touchstart",(e)=>{
      e.preventDefault();
      camera.touchStart(e);
      let [f,s]=camera.position_draw(e.touches[0]);
      ray.move(vector(s,f));
   })
   board.addEventListener("touchmove", (e) => {
      e.preventDefault();
      camera.touchMove(e);
      let [f, s] = camera.position_draw(e.touches[0]);
      ray.move(vector(s, f));
      
   })
   
   function animate(){
      requestAnimationFrame(animate);
      ctx.clearRect(0,0,width,height);
      fps.update();
      
      ctx.save();
      ctx.scale(camera.scale,camera.scale);
      ctx.translate(camera.offsetX,camera.offsetY);
      boxs.draw(ctx);
      ray.update()
      raytracing.setRay(ray.point, ray.endPoints,ray.angle);
      raytracing.update()
      ray.draw(ctx);
      
      ctx.restore();
      fps.draw(ctx);
   }
   animate()
})
