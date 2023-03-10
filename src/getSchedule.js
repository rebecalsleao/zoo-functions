const data = require('../data/zoo_data');

function findSpeciesInExibitionPerDay(day) {
  const speciesInExibition = [];
  data.species.forEach((specie) => {
    const specieAvailable = specie.availability.some((option) => option === day);
    if (specieAvailable === true) {
      speciesInExibition.push(specie.name);
    }
  });
  return speciesInExibition;
}

function getScheduleDay(day) {
  const openHour = data.hours[day].open;
  const closeHour = data.hours[day].close;
  let speciesInExibition = findSpeciesInExibitionPerDay(day);

  let workingHours = `Open from ${openHour}am until ${closeHour}pm`;
  if (openHour === 0) {
    workingHours = 'CLOSED';
    speciesInExibition = 'The zoo will be closed!';
  }

  return {
    officeHour: workingHours,
    exhibition: speciesInExibition,
  };
}

function allSchedule() {
  const result = {};
  Object.keys(data.hours).forEach((day) => {
    const scheduleDay = getScheduleDay(day);
    result[day] = scheduleDay;
  });
  return result;
}

function getSchedule(scheduleTarget) {
  const specieFound = data.species.find((specie) => specie.name === scheduleTarget);
  const day = data.hours[scheduleTarget];

  if (day === undefined && specieFound === undefined) {
    return allSchedule();
  }
  if (specieFound === undefined) {
    const result = {};
    result[scheduleTarget] = getScheduleDay(scheduleTarget);
    return result;
  }
  return specieFound.availability;
}

module.exports = getSchedule;
