function splitToDigit(n) {
  return (`${n}`).split('').map((i) => parseInt(i, 10));
}

try {
  let password = 130254;
  const end = 678275;
  let possible = 0;

  while (password <= end) {
    const digits = splitToDigit(password);
    let hasDoubles = false;
    let i = 0;
    let number = digits[i];
    let next = digits[i + 1];

    while (number <= next) {
      if (number === next) {
        hasDoubles = true;
      }
      i += 1;
      number = digits[i];
      next = digits[i + 1];
    }
    if (hasDoubles && i === 5) {
      possible += 1;
    }
    password += 1;
  }
  console.log(`possible: ${possible}`);
} catch (e) {
  console.log('error');
}
