var matchPlayersAndTrainers = function (players, trainers) {
  const n = players.length,
    m = trainers.length;

  let count = 0,
    i = 0,
    j = 0;

  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);

  while (i < n && j < m) {
    if (players[i] <= trainers[j]) {
      count++;
      i++;
    }
    j++;
  }

  return count;
};
