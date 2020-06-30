function main(input) {
    let allVal = input[1].split(" ")
    let mstVal = Math.max(...allVal)
    let mstPos = allVal.indexOf(mstVal + "")
    allVal.splice(mstPos, 1)
    console.log(allVal.reduce((cur, prev) => cur + +prev, 0) > mstVal ? "Yes" : "No");
}

console.log(main(["10", "1 8 10 5 8 12 34 100 11 3"]));