// Question 6
let achilles = 0;
let tortoise = 0;

const advantage = 100;
const nextMove = 1.01;

const makeMove = () => {
  if (tortoise === 0) {
    tortoise = advantage;
    return { tortoise, achilles };
  }

  if (achilles === 0) {
    achilles = advantage;
    tortoise *= nextMove;
    return { tortoise, achilles };
  }

  achilles *= nextMove;
  tortoise *= nextMove;

  return { tortoise, achilles };
};

const race = (moves) => {
  console.log(moves);
  let distances = [];

  for (let i = 0; i < moves; i++) {
    const newMove = makeMove(advantage, nextMove);
    distances.push(newMove);
  }

  return distances;
};

const raceResults = race(10);
console.log(raceResults);
