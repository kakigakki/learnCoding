//require("fs").readFileSync("/dev/stdin", "utf8")

function main(input) {
  //let input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n")
  let N = +input[0]
  let sum = 1
  for (let i = 2; i <= N; i++) {
    let s = new Set()
    let div = 1
    while (div <= i / 2) {
      if (i % div == 0) {
        s.add(div)
        s.add(i)
      }
      div++
    }
    sum += s.size * i
  }
  console.log(sum);
}

console.log(main(["100000"]));