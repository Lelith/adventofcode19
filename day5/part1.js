const prompt = require('prompt-sync')();
const utils = require('../utils');

function prepareOpcode(instruction) {
  // opp codes need to have length of 5, leading zeros are not given printed, so we fill them in.
  const codes = instruction.toString().split('');
  while (codes.length < 5) {
    codes.unshift(0);
  }
  return codes;
}


function gravityAssistant(memory) {
  let instructions = prepareOpcode(memory[0]).map(Number);
  let opCode = parseInt(instructions[3].toString() + instructions[4].toString(), 10);
  let pointer = 0;
  while (opCode > 0 && opCode !== 99 && pointer < memory.length) {
    if (opCode < 3) {
      const valA = instructions[2] === 1 ? memory[pointer + 1] : memory[memory[pointer + 1]];
      const valB = instructions[1] === 1 ? memory[pointer + 2] : memory[memory[pointer + 2]];
      if (opCode === 1) {
      //  console.log(`code 1 addign ${valA} and ${valB}`);
        const result = valA + valB;
        memory[memory[pointer + 3]] = result;
      } else {
        // console.log(`code 2 addign ${valA} and ${valB}`);
        memory[memory[pointer + 3]] = valA * valB;
      }
    } else if (opCode === 3) {
      const input = prompt('input required:');
      memory[memory[pointer + 1]] = input;
    } else if (opCode === 4) {
      const valA = instructions[2] === 1 ? memory[pointer + 1] : memory[memory[pointer + 1]];
      console.log('Code 4, printing value: ');
      console.log(valA);
    }
    // console.log(memory);
    // to move to next operation increase pointer position
    pointer = opCode < 3 ? pointer + 4 : pointer + 2;
    if (pointer < memory.length) {
      instructions = prepareOpcode(memory[pointer]).map(Number);
      opCode = parseInt(instructions[3].toString() + instructions[4].toString(), 10);
    }
  }
}


try {
  //  let memory = utils.readInput('./example.txt');
  let memory = utils.readInput('./input.txt');
  memory = utils.modDataCommas(memory);
  gravityAssistant(memory);
  console.log(memory[0]);
} catch (e) {
  console.error('Error', e.stack);
}
