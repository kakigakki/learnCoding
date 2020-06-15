/*  

Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. 
These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. 
The sum of the squared divisors is 2500 which is 50 * 50, a square!

Given two integers m, n (1 <= m <= n) we want to find all integers 
between m and n whose sum of squared divisors is itself a square. 42 is such a number.

The result will be an array of arrays or of tuples (in C an array of Pair) or a string,
each subarray having two elements, first the number whose squared divisors is a square
and then the sum of the squared divisors.
*/
function listSquared(m, n) {
    let result = [];
    for (let i = m; i <= n; i++) {
        let { isSquared, sum } = Squared(i);
        if (isSquared) result.push([i, sum]);
    }
    return result;
}

function Squared(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            if (arr[arr.length - 2] == i) {
                break;
            }
            arr.push(num / i, i);
        }
    }
    sum = [...new Set(arr)].reduce((prev, cur) => prev + cur ** 2, 0);
    return {
        sum: sum,
        isSquared: Number.isInteger(Math.sqrt(sum)),
    };
}
console.log(listSquared(1, 2));