const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    // read data
    const data = fs.readFileSync(path, { encoding: 'utf-8' });
    // split data and taking only list without header
    const lines = data.split('\n').slice(1, -1);
    // give the header of data
    const header = data.split('\n').slice(0, 1)[0].split(',');
    // find firstname and field index
    const idfirstname = header.findIndex((id) => id === 'firstname');
    const idfield = header.findIndex((id) => id === 'field');
    // declarate two dictionaries for count each fields and store list of students
    const fields = {};
    const students = {};

    lines.forEach((line) => {
      const list = line.split(',');
      if (!fields[list[idfield]]) fields[list[idfield]] = 0;
      fields[list[idfield]] += 1;
      if (!students[list[idfield]]) students[list[idfield]] = '';
      students[list[idfield]] += students[list[idfield]] ? `, ${list[idfirstname]}` : list[idfirstname];
    });

    console.log(`Number of students: ${lines.length}`);
    for (const key in fields) {
      if (Object.hasOwnProperty.call(fields, key)) {
        const element = fields[key];
        console.log(`Number of students in ${key}: ${element}. List: ${students[key]}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
