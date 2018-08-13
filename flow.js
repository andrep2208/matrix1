function Flow() {
    let randomplace = floor(random(0, 19))*30
    this.numberofword  = floor(random(1, 15));
    let randomstart = floor(random(0,100))
    this.word = [];
    this.maxword = 15;
    this.speed = floor(random(0,5));

    for (i= 0; i < this.maxword ; i++) {
      this.word[i] = new Word(i*wordSize,randomplace, randomstart,this.speed);
    }


    this.render = function () {
        
        for (i = 0; i < this.numberofword; i++){
            this.word[i].render();
            this.word[i].update();
        }
        
    }

    this.replay = function() {
    if (this.word[this.numberofword-1].y -this.word[this.numberofword-1].a -this.word[this.numberofword-1].b > 600 + wordSize) {
        //console.log('true')
        this.numberofword = floor(random(1, 15));
        for (i = 0; i < this.word.length; i++){
            this.word[i].y = 0;
        }
      }

    }   
  

}