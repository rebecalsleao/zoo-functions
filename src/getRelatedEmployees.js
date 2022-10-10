const data = require('../data/zoo_data');

function isManager(id) {
  const listManagers = [];
  data.employees.forEach((employee) => {
    employee.managers.forEach((managerId) => {
      listManagers.push(managerId);
    });
  });
  const managerFound = listManagers.find((manager) => manager === id);
  if (managerFound === undefined) {
    return false;
  }
  return true;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const listEmployees = [];
    data.employees.forEach((employee) => {
      const managerFound = employee.managers.find((manager) => managerId === manager);
      if (managerFound !== undefined) {
        listEmployees.push(`${employee.firstName} ${employee.lastName}`);
      }
    });
    return listEmployees;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
