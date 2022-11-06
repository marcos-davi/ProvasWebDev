let wa =0; 
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    wa++;
    background(220);
    if(wa > width || wa> height){
        wa=0;
    }
    
 
    
    test(wa*0.5,200, wa, 100);
    rotate(-wa)
    test(wa-4,150,wa/20,100);
    rotate(wa)
    test(wa/10,wa,wa-5,60);

    function test(w,h, x, y){ 
        rectMode(CENTER); 
        ellipseMode(CENTER)
        let wa =x++      
    noStroke()
    fill(255, 0, 0)    
    rect(x, y, w , h);
    rotate(frameRate)
    fill(255, 150 ,0)
    ellipse(x, y, h/1.5, w/1.5)

    }
    
   
  }