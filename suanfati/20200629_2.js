function Main(input) {
  //let input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
  let a = input[0].split("")
  let b = input[1].split("")
  let count = 0
  for (const i in a) {
    if (b[i] !== a[i]) count++
  }
  console.log(count);
}

console.log(Main(["1334", "1234"]));