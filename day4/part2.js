function splitToDigit(n) {
  return (`${n}`).split('').map((i) => parseInt(i, 10));
}

function saveDoubles(hasDoubles, savedDoubles) {
  return hasDoubles? savedDoubles + 1 : savedDoubles;
}
try {
  let password = 130254;
  const end = 678275;
  let possible = 0;

  while (password <= end) {
    const digits = splitToDigit(password);
    let hasDoubles = false;
    let savedDoubles = 0;
    let doublesCounter = 0;
    let i = 1;
    let number = digits[i];
    let before = digits[i - 1];
    while (before <= number) {
      if (before < number) {
        doublesCounter = 0;
        savedDoubles = saveDoubles(hasDoubles, savedDoubles)
      }
      if (before === number) {
        if (doublesCounter < 1) {
          hasDoubles = true;
        } else {
          hasDoubles = false;
        }
        doublesCounter += 1;
      }
      i += 1;
      before = number;
      number = digits[i];
    }
    savedDoubles = hasDoubles? savedDoubles+1 : savedDoubles;
    if (savedDoubles > 0 && i === 6) {
      possible += 1;
    }
    password += 1;
  }
  console.log(`possible: ${possible}`);
} catch (e) {
  console.log('error');
}
