const readline = require('readline')
class Bowling{
  constructor(){
    this.throw1 = [];
    this.throw2 = [];
    this.scores = [];
    this.throws = 1;
  }

  bowlingThrow(){
    const throw1= Math.floor(Math.random()*11);
    this.throw1.push(throw1)
    if (throw1 === 10){
      this.throw2.push(0);
    } else {
      const throw2 = Math.floor(Math.random()*(11-throw1));
      this.throw2.push(throw2);
    }
  }

  bowlingGame(){
    
  }
}
const game= new Bowling();
const { throw1,throw2 }= game.bowlingthrow();

