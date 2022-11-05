function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    
    test(200,200, 100, 100);
    test(150,150,100,100);
    test(15,15,50,50);

    function test(w,h, x, y){        
    noStroke()
    fill(255, 0, 0)    
    rect(x, y, w , h);
    fill(255, 150 ,0)
    ellipse(x*2, y*2, h/1.5, w/1.5)

    }
    
   
  }