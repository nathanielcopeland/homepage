let xs = []
for (var i = 0; i < 3000; i++){
  xs.push(i)
}


let k = 100

let t = 0

 var countup = true;

function animate() {
  
  let points = xs.map(x => {
    
    let l = 100
       
   
    
    
    
    let y = 400 + k * Math.sin((x + t) / 120)
    
    
    
   
    return [x, y]
  })
  
  let path = "M" + points.map(p => {
    return p[0] + "," + p[1]
  }).join(" L")
  
  document.querySelector("path").setAttribute("d", path)
  
  t += 1
  
  if (countup == true)
    {
      k+= 0.3;
      if(k >= 100)
      {
      countup = false;
      }
    }
    else {
      k-= 0.3;
      if (k <= 0){
        countup = true;
      }
    }
  
  requestAnimationFrame(animate)
}

animate()