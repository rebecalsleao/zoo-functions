const data = require('../data/zoo_data');

// const animal = { specie: 'penguins' }

function countAnimals(animal) {
  const result = {};
  if (animal === undefined) {
    data.species.forEach((element) => {
      const keySpecies = element.name;
      const valueSpecies = element.residents.length;
      result[keySpecies] = valueSpecies;
    });
    return result;
  }
  if (animal.sex === undefined) {
    return data.species.find((specie) => specie.name === animal.specie).residents.length;
  }
  const specieFound = data.species.find((specie) => specie.name === animal.specie);
  return specieFound.residents.filter((resident) => resident.sex === animal.sex).length;
}

module.exports = countAnimals;
