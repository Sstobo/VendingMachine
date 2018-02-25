module.exports = comparisonData = [
  {
    name: 'Salvatore Erdman',
    age: 38,
    yearsExperience: 4,
    satisfaction: 3,
    project1: 'pass',
    project2: 'pass',
    project3: 'pass',
    project4: 'pass',
  },
  {
    name: 'Lempi Price',
    age: 33,
    yearsExperience: 4,
    satisfaction: 1,
    project1: 'pass',
    project2: 'pass',
    project3: 'pass',
    project4: 'pass',
  },
];
module.exports = async function () {
  return {
    then() {
      throw 'Error';
    },
  };
};
