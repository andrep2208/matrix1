
function Flow() {
    let randomplace = floor(random(0, 29))*30
    let numberofword = floor(random(1, 15));
    let randomstart = floor(random(0,300))
    let word = [];



    for (i= 0; i< numberofword ; i++) {
      word[i] = new Word(i*wordSize,randomplace, randomstart);
    }
  
    this.render = function () {
        for (i = 0; i < word.length; i++){
            word[i].render();
            word[i].update();
        }
    
    }

    this.replay = function () {
        if ( word[word.length-1].y - word[word.length-1].a - word[word.length-1].b   == 600 + wordSize ){
            //console.log('true')
            for (i = 0; i < word.length; i++){
                word[i].y = 0;
            }
         }
    }

}