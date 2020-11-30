const utils = require('../utils');

function prepareOpcode(instruction) {
  // opp codes need to have length of 5, leading zeros are not given printed, so we fill them in.
  const codes = instruction.toString().split('').toInt();
  while (codes.length < 5) {
    codes.unshift(0);
  }
  return codes;
}

function gravityAssistant(memory) {
  let oppCode = memory[0];
  let i = 0;
  let pointer = 0;
  while(opcode !== 99 || i<10) {
    console.log(opcode);
  }
}


try {
  let memory = utils.readInput('./example.txt');
  // let memory = utils.readInput('./input.txt');
  memory = utils.modDataCommas(memory);
  const oppcode = prepareOpcode(1002);
  console.log(memory);
  console.log(oppcode);
} catch (e) {
  console.error('Error', e.stack);
}
