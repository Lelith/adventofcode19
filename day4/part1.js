function splitToDigit(n) {
  return (`${n}`).split('').map((i) => Number(i));
}
try {
  let password = 111;
  const end = 150;
  let possible = 0;

  while (password < end) {
    const digits = splitToDigit(password);
    let hasDoubles = false;
    let i = 0;
    while (digits[i] >= digits[i + 1] && i <= digits.length) {
      console.log(i);
      if (digits[i] === digits[i + 1]) {
        hasDoubles = true;
      }
      i += 1;
    }
    if (hasDoubles) {
      possible += 1;
    }
    password += 1;
  }
  console.log(possible);
} catch (e) {
  console.log('error');
}
