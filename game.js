class Bowling {
  constructor() {
    this.throw1 = [];
    this.throw2 = [];
    this.scores = [];
    this.round = 0;
  }

  bowlingThrow() {
    const throw1 = Math.floor(Math.random() * 11);
    let throw2 = 0;
    this.throw1.push(throw1);
    if (throw1 !== 10) {
      throw2 = Math.floor(Math.random() * (11 - throw1));
    }

    this.throw2.push(throw2);
    let resultado = throw1 + throw2;
    if (this.round !== 0) {
      resultado += this.scores[this.round - 1];
    }
    this.scores.push(resultado);
  }

  bowlingGame() {
    while (this.round < 10) {
      this.bowlingThrow();
      this.round++;
    }
  }

  bowlingScore() {
    let throws = "";
    let score = "";
    for (let i = 0; i < 10; i++) {
      throws = throws.concat(
        this.throw1[i],
        String(this.throw1[i]).length === 2 ? " " : "  ",
        this.throw2[i],
        String(this.throw2[i]).length === 2 ? "" : " ",
        "|"
      );
      score = score.concat(
        this.scores[i],
        String(this.scores[i]).length === 1
          ? "    "
          : String(this.scores[i]).length === 2
          ? "   "
          : "  ",
        "|"
      );
    }
    console.log(throws);
    console.log(score);
  }
}

const game = new Bowling();
game.bowlingGame();
game.bowlingScore();
