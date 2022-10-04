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
  } else if (animal.sex === undefined) {
    return data.species.find((specie) => specie.name === animal.specie).residents.length;
  } else {
    return data.species.find((specie) => specie.name === animal.specie).residents.filter((resident) => resident.sex === animal.sex).length;
  }
}

module.exports = countAnimals;

// let result;
// data.species.forEach((element) => {
//   if (element.name === specie) {
//     result = element.residents.every((resident) => resident.age >= minAge);
//   }
// });
// return result;
// }

// Object.value(parametro).length === 0
