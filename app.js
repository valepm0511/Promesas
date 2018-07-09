//movimiento derecha e izquierda
function animateElementLeftRight(element, start, target, duration){ 
	element.style.left = start; 
	let counter = 0;
  const delta = (target - start)*40/duration; 
  return new Promise((resolve, reject)=>{ 
    const loop = setInterval(()=>{ 
      const current = start + counter++ * delta;
      element.style.left = current;
      if(start > target && current <= target){ 
       element.style.left = current;
       clearInterval(loop);
       resolve();
     }else if(start < target && current >= target){
       element.style.left = current;
       clearInterval(loop); 
       resolve();
     }
   }, 40);
  });                
}
//movimiento arriba y abajo
function animateElementTopBottom(element, start, target, duration){ 
  element.style.top = start; 
  let counter = 0;
  const delta = (target - start)*40/duration; 
  return new Promise((resolve, reject)=>{ 
    const loop = setInterval(()=>{ 
      const current = start + counter++ * delta;
      element.style.top = current;
      if(start > target && current <= target){ 
       element.style.top = current;
       clearInterval(loop);
       resolve();
     }else if(start < target && current >= target){
       element.style.top = current;
       clearInterval(loop); 
       resolve();
     }
   }, 40);
  });                
}

const allLi = document.getElementsByTagName("li");
Promise.all( 
  [
  animateElementLeftRight(allLi[0], 0, 1200, 2000),
  animateElementLeftRight(allLi[1], 0, 1200, 2000)
  ]
  ).then((results) => {
    console.log("llegaron a la derecha");
    return Promise.all( 
      [
      animateElementTopBottom(allLi[0], 0, 380, 1000),
      animateElementTopBottom(allLi[1], 150, 530, 1000)
      ]
      )
  }).then((results) => {
    console.log("llegaron abajo");
    return Promise.all (
      [
      animateElementLeftRight(allLi[0], 1200, 0, 2000),
      animateElementLeftRight(allLi[1], 1200, 0, 2000)
      ]        
      )
  }).then((results) => {
    console.log("llegaron a la izquierda");
    return Promise.all( 
      [
      animateElementTopBottom(allLi[0], 380, 0, 1000),
      animateElementTopBottom(allLi[1], 530, 150, 1000)
      ]
      )
  }).then((results) => {
   console.log("llegaron al inicio");    
 }).catch(() => {
  console.log("Falló la animación");
});