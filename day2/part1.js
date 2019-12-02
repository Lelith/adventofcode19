const utils = require('../utils');

function gravityAssistant(data) {
  let i = 0;
  let a = 0;
  let b = 0;
  let pointer = 0;
  let operator = data[0];
  while (operator !== 99 && i < (data.length - 1)) {
    a = data[i + 1];
    b = data[i + 2];
    pointer = data[i + 3];
    console.log(`i: ${i}, a: ${data[a]}, b: ${data[b]}, operator: ${operator}, pointer ${pointer}`);
    if (operator === 1) {
      data[pointer] = data[a] + data[b];
    } else if (operator === 2) {
      data[pointer] = data[a] * data[b];
    }
    i += 4;
    operator = data[i];
  }
  return data;
}

try {
  // let data = utils.readInput('./example.txt');
  let data = utils.readInput('./input.txt');
  data = utils.modDataCommas(data);
  data[1] = 12;
  data[2] = 2;
  const results = gravityAssistant(data);
  console.log(results);
  console.log(results[0]);
} catch (e) {
  console.log('Error', e.stack);
}
