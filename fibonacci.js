function fibs(num, fibNums = [0, 1]) {
  if (num === 1) return [0];
  if (num < 1) return new Error('Invalid number');

  const len = fibNums.length;

  if (num === len) {
    return fibNums;
  }

  fibNums.push(fibNums[len - 2] + fibNums[len - 1]);
  return fibs(num, fibNums);
}

console.log(
  fibs(8)
);
