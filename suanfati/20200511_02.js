/* Bob is preparing to pass IQ test. 
The most frequent task in this test is to find out which one of the given numbers differs from the others. 
Bob observed that one number usually differs from the others in evenness. 
Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0) */

function iqTest(numbers) {
  return numbers.split(" ").findIndex((item, index, arr) => {
    if (index === 0) {
      if (item % 2 !== arr[index + 1] % 2) {
        return arr[index + 1] % 2 === arr[index + 2] % 2
      }
    } else {
      return arr[index - 1] % 2 !== item % 2
    }
  }) + 1
}

console.log(iqTest("3 4 3 3 13 11 13 13 9"));

console.log(typeof undefined);