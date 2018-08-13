function Word (a, x, b) {  
  
    let randomnum;
    this.x = x;
    this.y = 0;
    this.gravity = 0;
    this.velocity = 1;
    this.a = a;
    this.b = b;
  
  
    this.render = function() {
      textSize(wordSize);
  
      if (frameCount % 20 == 0 ){
        randomnum = random()*33
      }
  
      text(String.fromCharCode(3e4+randomnum), this.x, this.y -a - b);
      fill(255,0,0);
    }
  
    this.update = function() {
      //this.gravity += this.velocity;
      this.y += this.velocity;
    }
  
  }