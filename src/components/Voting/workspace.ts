type ThrowOptions = 'rock' | 'paper' | 'scissors';
const throwOptions: ThrowOptions[] = ['rock', 'paper', 'scissors'];

const rockPaperScissors = (
  roundsPerGame: number,
  roundOfGame: number = 0,
  result: ThrowOptions[][] = [],
  current: ThrowOptions[] = []
): ThrowOptions[][] => {
  if (roundOfGame === roundsPerGame) result.push(current);
  else
    throwOptions.forEach((throwOption: ThrowOptions) =>
      rockPaperScissors(roundsPerGame, roundOfGame + 1, result, [
        ...current,
        throwOption,
      ])
    );

  return result;
};

console.log(rockPaperScissors(5));
