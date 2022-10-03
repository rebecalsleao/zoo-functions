const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let result = {};

  data.employees.forEach((element) => {
    if (element.firstName === employeeName || element.lastName === employeeName) {
      result = element;
    }
  });
  return result;
}

module.exports = getEmployeeByName;
