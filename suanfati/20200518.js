// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
    let str = strng.match(/^[A-z]*/)[0];
    let numstr = strng.slice(str.length);
    if (numstr.length) {
        let newstr = (+numstr + 1)
            .toString()
            .padStart(10, "0")
            .slice(-numstr.length);
        return +newstr ? str + newstr : str + "1" + newstr;
    } else {
        return strng + 1;
    }
}

/* 大神解法

let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)

*/

console.log(incrementString("ddd22"));