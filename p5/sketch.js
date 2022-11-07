let wa =0; 
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    wa++;
    background(220);
    if(wa >= width || wa>= height){
        wa=-10;
    }
    
 
    
    test(wa*1,200, 200, 100);
    rotate(wa/200);
    fill(255, 150 ,200);
    test(wa,150,wa*20,100);
    //rotate(wa)
    test(wa/10,wa,wa*5,60);
    test(-wa/2,-wa,-wa*8,-50);

    function test(w,h, x, y){ 
        rectMode(CENTER); 
        ellipseMode(CENTER)
       let wa =y++      
    noStroke()
    fill(0, 100, 255)    
    rect(wa, y, w , h);
    //rotate(frameRate)
    fill(255, 150 ,150);
    ellipse(x, y, h/1.5, w/1.5)

    }
    
   
  }