function Word (a, x, b,speed) {  
  
  let randomnum;
  this.x = x;
  this.y = 0;
  this.gravity = 0;
  this.velocity = 1 + speed;
  this.a = a;
  this.b = b;
  this.glow = round(random(0,0.51));

  this.render = function(fade) {
    textSize(wordSize);

    if (frameCount % 15 == 0 ){
      randomnum = random()*33
    }

    push()

    fill(255-fade,0,255-fade);

    if (this.glow == 1) {
      stroke('white');
      strokeWeight(7 - fade/200);
      smooth();
    }
    textStyle(BOLD)
    text(String.fromCharCode(0x30A0+randomnum), this.x, this.y -a - b);
    pop();
    
  }

  this.update = function() {
    this.gravity += this.velocity;
    this.y += this.velocity;
  }

}