const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let countChild = 0;
  let countAdult = 0;
  let countSenior = 0;
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      countChild += 1;
    }
    if (entrant.age >= 18 && entrant.age < 50) {
      countAdult += 1;
    }
    if (entrant.age >= 50) {
      countSenior += 1;
    }
  });
  const sumAge = { child: countChild, adult: countAdult, senior: countSenior };
  return sumAge;
}

function calculateEntry(entrants) {
  const result = 0;
  if (entrants === undefined) {
    return result;
  }
  if (Object.keys(entrants).length === 0) {
    return result;
  }
  const entryChild = data.prices.child * countEntrants(entrants).child;
  const entryAdult = data.prices.adult * countEntrants(entrants).adult;
  const entrySenior = data.prices.senior * countEntrants(entrants).senior;
  const sumEntry = entryChild + entryAdult + entrySenior;
  return sumEntry;
}

module.exports = { calculateEntry, countEntrants };
