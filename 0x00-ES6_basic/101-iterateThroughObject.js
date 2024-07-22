export default function iterateThroughObject(reportWithIterator) {
  // Collect all employee names into an array
  const employeesArray = [];
  for (const employee of reportWithIterator) {
    employeesArray.push(employee);
  }

  // Join the array into a string separated by ' | '
  return employeesArray.join(' | ');
}
