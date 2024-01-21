// When more then 50 1 point per usd when more then 100 2 points per usd
// USD 120 = 90 points

function fiftyBeforeHundred(usd) {
  if (usd < 50) {
    return 0;
  }
  return usd - 50;
}

function afterHundred(usd) {
  if (usd <= 100) {
    return 0;
  }
  return usd - 100;
}

function pointsCalculator(usd) {
  let points = 0;
  const roundedUsd = Math.floor(usd);

  points += fiftyBeforeHundred(roundedUsd);
  points += afterHundred(roundedUsd);

  return points;
}

module.exports = pointsCalculator;
