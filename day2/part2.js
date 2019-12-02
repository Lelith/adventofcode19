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

function replaceParameters(memory) {
  let noun = 0;
  while (noun < 100) {
    const tempMemory = memory.slice();
    tempMemory[1] = noun;
    tempMemory[2] = 0;
    const gravity = gravityAssistant(tempMemory);
    const difference = 19690720 - gravity[0];
    console.log(`noun:${noun}, difference: ${difference} `);
    if (difference > 99) {
      noun += 1;
    } else {
      return [noun, difference];
    }
  }
  return false;
}

try {
  // let data = utils.readInput('./example.txt');
  let memory = utils.readInput('./input.txt');
  memory = utils.modDataCommas(memory);
  const results = replaceParameters(memory);
  if (results) {
    console.log(results);
    console.log(100 * results[0] + results[1]);
  }
} catch (e) {
  console.log('Error', e.stack);
}
