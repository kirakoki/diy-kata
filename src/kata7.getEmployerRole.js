const getEmployerRole = (employeeName, employees) => {
  const employee = employees.find(i => i.name === employeeName);
  return employee.role;
};

module.exports = getEmployerRole;
