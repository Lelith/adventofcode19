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

function getValue(parameterMode, paramNo, pointer, memory) {
  return parameterMode === 1 ? memory[pointer + paramNo] : memory[memory[pointer + paramNo]];
}

const writingTarget = (memory, pointer) => memory[pointer + 3];

function gravityAssistant(memory) {
  let instructions = prepareOpcode(memory[0]).map(Number);
  let opCode = parseInt(instructions[3].toString() + instructions[4].toString(), 10);
  let pointer = 0;
  while (opCode > 0 && opCode !== 99 && pointer < memory.length) {
    if (opCode === 1 || opCode === 2) {
      const valA = getValue(instructions[2], 1, pointer, memory);
      const valB = getValue(instructions[1], 2, pointer, memory);
      if (opCode === 1) {
        console.log(`code 1 addign ${valA} and ${valB}`);
        memory[writingTarget(memory, pointer)] = valA + valB;
      } else {
        console.log(`code 2 addign ${valA} and ${valB}`);
        memory[writingTarget(memory, pointer)] = valA * valB;
      }
      pointer += 4;
    } else if (opCode === 3) {
      const input = prompt('input required:');
      memory[memory[pointer + 1]] = parseInt(input, 10);
      pointer += 2;
    } else if (opCode === 4) {
      const outputVal = getValue(instructions[2], 1, pointer, memory);
      console.log('Code 4, printing value: ');
      console.log(outputVal);
      pointer += 2;
    }
    // else if (opCode === 5) {
    //   const valA = getValue(instructions[2], 1, pointer, memory);
    //   if(valA)
    // }
    // console.log(memory);
    // to move to next operation increase pointer position
    // pointer = opCode < 3 ? pointer + 4 : pointer + 2;
    if (pointer < memory.length) {
      instructions = prepareOpcode(memory[pointer]).map(Number);
      opCode = parseInt(instructions[3].toString() + instructions[4].toString(), 10);
      if (opCode === 99) {
        console.log('stop command received');
      }
    }
  }
}


try {
  // let memory = utils.readInput('./example.txt');
  let memory = utils.readInput('./input.txt');
  memory = utils.modDataCommas(memory);
  gravityAssistant(memory);
} catch (e) {
  console.error('Error', e.stack);
}
