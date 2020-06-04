/* 给出一个数，算出起所有质数 */
function primeFactors(n) {
  if (n <= 2) return n;
  let res = "";
  for (let i = 2; i <= n; i++) {
    let count = 0;
    while (n % i === 0) {
      count++;
      n = n / i;
    }
    if (count) {
      res += "(" + i + (count === 1 ? ")" : "**" + count + ")");
    }
  }
  return res;
}