const utils = require('../utils');

function calculateMass(mass) {
  const result = Math.floor(mass / 3) - 2;
  return result;
}

try {
  //const data = utils.readInput('./example.txt');
  const data = utils.readInput('./input.txt');
  const fuel = [];
  data.map((module) => {
    fuel.push(calculateMass(module));
  });
  const sumFuel = fuel.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(`Summ of needed Fuel ${sumFuel}`);
} catch (e) {
  console.log('Error:', e.stack);
}
