function array_diff_very_fast(a, b) {
    let newB = [...new Set(b)]
    return a.filter(item => !newB.includes(item))
}

console.log(array_diff_very_fast([1, 2, 2, 2, 3], [2]));