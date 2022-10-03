const data = require('../data/zoo_data');

function getAnimalsOlderThan(specie, minAge) {
  let result;
  data.species.forEach((element) => {
    if (element.name === specie) {
      result = element.residents.every((resident) => resident.age >= minAge);
    }
  });
  return result;
}

module.exports = getAnimalsOlderThan;
