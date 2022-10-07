const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeeFound = data.employees.find((employee) => employee.id === id);
  const specieId = employeeFound.responsibleFor[0];
  const specieFound = data.species.find((spacie) => spacie.id === specieId);
  // eslint-disable-next-line max-len
  const resident = specieFound.residents.reduce((prev, current) => (prev.age > current.age ? prev : current));
  return Object.values(resident);
}

module.exports = getOldestFromFirstSpecies;
