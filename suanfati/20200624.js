function convertFrac(lst) {
    let denomList = lst.map((item) => item[1]);
    let commonD = calc(denomList);
    return lst
        .map((item) => `(${item[0] * (commonD / item[1])},${commonD})`)
        .join("");
}

function calc(denomList) {
    let flag;
    for (let i = Math.max(...denomList); i > 0; i++) {
        flag = true;
        for (let j = 0; j < denomList.length; j++) {
            if (i % denomList[j] !== 0) {
                flag = false;
            }
        }
        if (flag) {
            return i;
        }
    }
}

console.log(
    convertFrac([
        [1, 2],
        [1, 13],
        [1, 15],
    ])
);

/* const gcd = (a, b) => b ? gcd(b, a % b) : a;
const lcm = (a, b) => a * b / gcd(a, b);

function convertFrac(arr) {
  const cd = arr.reduce((a, [_, d]) => lcm(d, a), 1);
  return arr.map(([n, d]) => `(${n * cd/d},${cd})`).join('');
} */