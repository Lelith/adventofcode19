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
  for (noun; noun < 100; noun += 1) {
    let verb = 0;
    for (verb; verb < 100; verb += 1) {
      const tempMemory = memory.slice();
      tempMemory[1] = noun;
      tempMemory[2] = verb;
      const gravity = gravityAssistant(tempMemory);
      console.log(`noun: ${noun}, verb ${verb}, gravity: ${gravity[0]}`);
      if (gravity[0] === 19690720) {
        return [noun, verb];
      }
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
