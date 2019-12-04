function splitToDigit(n) {
  return (`${n}`).split('').map((i) => Number(i));
}
try {
  let password = 10;
  const end = 30;
  const possible = 0;

  while (password < end) {
    const digits = splitToDigit(password);
    console.log(digits);
    password += 1;
  }
} catch (e) {
  console.log('error');
}
