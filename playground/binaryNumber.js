// A sparse binary integer is an integer whose binary representation does not contain any consecutive 1 s.


// Sample code to perform I/O:

function isSparse(binaryString) {
  let sparse = true;

  if (binaryString.length > 1) {
    const binaryOnes = binaryString.split(0); // get all ones
    console.log(binaryOnes);
    let idx = 0;
    while (sparse && idx < binaryOnes.length) {
      if (binaryOnes[idx].length > 1) {
        sparse = false;
      }
      idx += 1;
    }
  }
  return sparse;
}

function solution(number) {
  // first convert int into binary String representation

  let isSparseNumber = false;
  // if not a sparse number increase the binary and try again
  while (!isSparseNumber) {
    console.log(number);
    isSparseNumber = isSparse((number).toString(2));
    if (!isSparseNumber) {
      number += 1;
    }
  }
  return number;
}


function main(input) {
  input = parseInt(input, 10);
  const number = solution(input);
  process.stdout.write(`${number}`); // Writing output to STDOUT
}

try {
  process.stdin.resume();
  process.stdin.setEncoding('utf-8');
  let stdinInput = '';

  process.stdin.on('data', (input) => {
    stdinInput += input; // Reading input from STDIN
  });

  process.stdin.on('end', () => {
    main(stdinInput);
  });

  // solution(5);
} catch (error) {
  console.log(error);
}
