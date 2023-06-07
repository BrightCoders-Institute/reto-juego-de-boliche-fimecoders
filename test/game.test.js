const Bowling = require('./archivo');

describe('Bowling', () => {
  let bowling;

  beforeEach(() => {
    bowling = new Bowling();
  });

  test('bowlingThrow should update throws and scores arrays', () => {
    bowling.bowlingThrow();

    expect(bowling.throws.length).toBe(2);
    expect(bowling.scores.length).toBe(1);
  });

  test('isStrike should return true if it was a strike in the specified round', () => {
    bowling.throws = [10, 0, 5, 4];

    expect(bowling.isStrike(0)).toBe(true);
    expect(bowling.isStrike(1)).toBe(false);
  });

  test('isSpare should return true if it was a spare in the specified round', () => {
    bowling.throws = [7, 3, 5, 4];

    expect(bowling.isSpare(0)).toBe(true);
    expect(bowling.isSpare(1)).toBe(false);
  });

  test('bowlingGame should update throws, scores, and calculate final score', () => {
    bowling.bowlingGame();

    expect(bowling.throws.length).toBe(21);
    expect(bowling.scores.length).toBe(10);
  });

});
