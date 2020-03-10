const utils = require('../utils');

function prepareOpcode(instruction) {
  const codes = instruction.split();
  console.log(codes);
}

function gravityAssistant(data) {
  let i = 0;
  let a = 0;
  let b = 0;
  let pointer = 0;
  let value = 0;
  let operator = prepareOpcode(data[0]);

/*  while (operator !== 99 && i < (data.length - 1)) {
    a = data[i + 1];
    b = data[i + 2];
    pointer = data[i + 3];
    switch (operator) {
      case 1:
        data[pointer] = data[a] + data[b];
        break;
      case 2:
        data[pointer] = data[a] * data[b];
        break;
      case 3:
        break;
      case 4:
        break;
      default: return false;
    }
    i += 4;
    operator = data[i];
  } */
  return data;
}

try {
  let memory = utils.readInput('./example.txt');
  // let memory = utils.readInput('./input.txt');
  memory = utils.modDataCommas(memory);
  const result = gravityAssistant(memory);
  console.log(result);
} catch (e) {
  console.log('Error', e.stack);
}
