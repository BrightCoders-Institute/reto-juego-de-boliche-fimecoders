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
    if (this.round === 9 && (throw1 === 10 || this.isSpare(this.round))) {
      throw2 = Math.floor(Math.random() * 11);
    } else if (throw1 !== 10) {
      throw2 = Math.floor(Math.random() * (11 - throw1));
    }
    this.throw2.push(throw2);
    let resultado = throw1 + throw2;

    if (this.round !== 0) {
      resultado += this.scores[this.round - 1];

      if (this.isStrike(this.round - 1)) {
        resultado += throw1 + throw2;
      } else if (this.isSpare(this.round - 1)) {
        resultado += throw1;
      }
    }
    this.scores.push(resultado);
  }
  isStrike(round) {
    return this.throw1[round] === 10;
  }
  isSpare(round) {
    return this.throw1[round] + this.throw2[round] === 10;
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
    let frameScore = 0;
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
