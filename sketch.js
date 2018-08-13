
//var flow = [];
var flow1;
var wordSize = 20;
function setup () {
  createCanvas(800,600); 
  // for (let i = 0; i < 50; i++){
  //   flow[i] = new Flow();
  // }
  flow1 = new Flow();

}

var randomnum;
function draw() {
  background(0);
//  for(let i = 0; i < flow.length; i++) {
//    flow[i].render();
//  }
    //flow.render();
    flow1.render();
    flow1.replay();



}