const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  if (ids.length === 1) {
    return [data.species.find((specie) => specie.id === ids[0])];
  }
  if (ids.length > 1) {
    const listSpecies = [];

    ids.forEach((id) => {
      const specie = data.species.find((specieZoo) => specieZoo.id === id);
      listSpecies.push(specie);
    });

    return listSpecies;
  }
}

module.exports = getSpeciesByIds;
