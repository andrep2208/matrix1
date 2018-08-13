function Word (a, x, b,speed) {  
  
    let randomnum;
    this.x = x;
    this.y = 0;
    this.gravity = 0;
    this.velocity = 1 + speed;
    this.a = a;
    this.b = b;
    this.glow = round(random(0,1));
  
    this.render = function() {
      textSize(wordSize);
  
      if (frameCount % 20 == 0 ){
        randomnum = random()*33
      }

      text(String.fromCharCode(3e4+randomnum), this.x, this.y -a - b);
      push();
      fill(255,0,0);

      if (this.glow == 0){
        stroke('white');
        pop();
      }
     
    }

    this.glow = function () {
      
      stroke('white');
    }
  
    this.update = function() {
      //this.gravity += this.velocity;
      this.y += this.velocity;
    }
  
  }