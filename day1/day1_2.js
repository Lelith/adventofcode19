const utils = require('../utils');

function calculateMass(mass) {
  const result = Math.floor(mass / 3) - 2;
  return result;
}

try {
  // const data = utils.readInput('./example.txt');
  let data = utils.readInput('./input.txt');
  data = utils.modDataNewline(data);

  const fuel = [];
  data.map((module) => {
    let fuelNeed = calculateMass(module);
    while (fuelNeed > 0) {
      fuel.push(fuelNeed);
      fuelNeed = calculateMass(fuelNeed);
    }
  });
  const sumFuel = fuel.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(`Summ of needed Fuel ${sumFuel}`);
} catch (e) {
  console.log('Error:', e.stack);
}
