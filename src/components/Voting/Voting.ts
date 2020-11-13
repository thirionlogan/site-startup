const faker = require('faker');

type Vote = {
  voter: string;
  preferenceList: string[];
};

type VotingPool = Vote[];

type Tally = { [key: string]: number };

function filterDuplicates<T>(arr: Array<T>): Array<T> {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}

const partyOptions = [
  'Green',
  'Democrat',
  'Libertarian',
  'Monarchist',
  'Republican',
  'Anarchist',
  'Fascist',
  'Antifa',
  'Communist',
  'Progressive',
];

const generateCandidates = (numberOfCandidates: number): string[] => {
  // eslint-disable-next-line prefer-const
  let candidates: string[] = [];
  for (let i = 0; i < numberOfCandidates; i++) {
    candidates.push(faker.name.findName());
  }
  return filterDuplicates(candidates);
};

const generatePreferences = (
  numberOfPreferences: number,
  options: string[]
): string[] => {
  // eslint-disable-next-line prefer-const
  let preferences: string[] = [];
  for (let i = 0; i < numberOfPreferences && i < options.length; i++) {
    const pick = options[Math.floor(Math.random() * options.length)];
    preferences.push(pick);
    options.filter((option) => {
      return option !== pick;
    });
  }

  return preferences;
};

const candidates = generateCandidates(10);

const generateVotingPool = (numberOfVotes: number): VotingPool => {
  // eslint-disable-next-line prefer-const
  let votingPool: VotingPool = [];
  for (let i = 0; i < numberOfVotes; i++) {
    votingPool.push({
      voter: faker.name.findName(),
      preferenceList: generatePreferences(
        Math.floor(Math.random() * candidates.length) + 1,
        candidates
      ),
    });
  }
  return votingPool;
};

const tallyVotes = (votingPool: VotingPool): Tally => {
  // eslint-disable-next-line prefer-const
  let runningTally: Tally = {};
  votingPool.forEach((vote, i) => {
    const firstChoice = vote.preferenceList[0];
    if (firstChoice) {
      if (!runningTally[firstChoice]) {
        runningTally[firstChoice] = 1;
      } else {
        runningTally[firstChoice] += 1;
      }
    }
  });
  return runningTally;
};

const pickLoser = (tally: Tally): string => {
  let loser: [string, number] = ['', 0];
  Object.entries(tally).forEach((candidate, i) => {
    if (!i) {
      loser = candidate;
    } else if (candidate[1] < loser[1]) {
      loser = candidate;
    }
  });
  return loser[0];
};

const removeLoser = (loser: string, votingPool: VotingPool): VotingPool => {
  return votingPool.map((vote) => {
    const { preferenceList } = vote;
    return {
      ...vote,
      preferenceList: preferenceList.filter((option) => {
        return option !== loser;
      }),
    };
  });
};

const getElectionWinners = (votingPool: VotingPool): Tally => {
  const tally = tallyVotes(votingPool);
  if (Object.entries(tally).length > 1) {
    console.log('The tally is ', tally);
    const loser = pickLoser(tally);
    console.log('Loser for this round is', loser);
    return getElectionWinners(removeLoser(loser, votingPool));
  }
  return tally;
};

const getMultipleElectionWinners = (
  votingPool: VotingPool,
  numberOfWinners: number
): Tally => {
  let modifiedVotingPool = votingpool;
  let winnerPool: Tally = {};
  for (let i = 0; i < numberOfWinners; i++) {
    // eslint-disable-next-line prefer-const
    let roundWinner: Tally = getElectionWinners(modifiedVotingPool);
    winnerPool = { ...winnerPool, ...roundWinner };
    modifiedVotingPool = removeLoser(
      Object.entries(roundWinner)[0][0],
      modifiedVotingPool
    );
    console.log('winner pool: ', winnerPool);
  }
  return winnerPool;
};

const votingpool = generateVotingPool(1000);

console.log(votingpool);
console.log('WINNERS:', getMultipleElectionWinners(votingpool, 3));
