class Bowling {
  constructor() {
    this.throws = [];
    this.scores = [];
  }

  bowlingThrow() {
    let throw1 = Math.floor(Math.random() * 11);
    let throw2 = 0;
    if (throw1 !== 10) {
      throw2 = Math.floor(Math.random() * (11 - throw1));
    }

    this.throws.push(throw1, throw2);

    let round = this.throws.length / 2 - 1;

    let resultado = throw1 + throw2;
    if (round !== 0) {
      resultado += this.scores[round - 1];

      if (this.isStrike(round - 1)) {
        resultado += throw1 + throw2;
      } else if (this.isSpare(round - 1)) {
        resultado += throw1;
      }
    }

    this.scores.push(resultado);
  }

  isStrike(round) {
    return this.throws[round * 2] === 10;
  }

  isSpare(round) {
    return this.throws[round * 2] + this.throws[round * 2 + 1] === 10;
  }

  bowlingGame() {
    for (let round = 0; round < 10; round++) {
      this.bowlingThrow();

      if (round === 9 && (this.isStrike(9) || this.isSpare(9))) {
        const extraThrow = Math.floor(Math.random() * 11);
        this.throws.push(extraThrow);
        this.scores[9] += extraThrow;
      }
    }
  }

  bowlingScore() {
    let throws = "";
    let score = "";
    let frameScore = 0;

    for (let i = 0; i < 10; i++) {
      throws = throws.concat(
        this.throws[i * 2],
        String(this.throws[i * 2]).length === 2 ? " " : "  ",
        this.throws[i * 2 + 1],
        String(this.throws[i * 2 + 1]).length === 2 ? "" : " ",
        "|"
      );

      frameScore = this.scores[i];

      score = score.concat(
        frameScore,
        String(frameScore).length === 1 ? "    " : String(frameScore).length === 2 ? "   " : "  ",
        "|"
      );
    }

    if (this.throws.length > 20) {
      throws = throws.concat(
        this.throws[20],
        "  |"
      );
    }

    console.log(throws);
    console.log(score);

    if (this.isStrike(9) || this.isSpare(9)) {
      console.log(`¡Aquí hubo un ${this.isStrike(9) ? "strike" : "spare"} en el décimo frame! \n Los  ${this.throws[20]} puntos extra se han sumado a la puntuación final.\n`);
    }
  }
}

const game = new Bowling();
game.bowlingGame();
game.bowlingScore();
