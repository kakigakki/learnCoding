/* function* generator() {
    yield 1 + 1
    yield 3 + 4
    return 5
}
let a = generator()
console.log(a.next(), a.next(), a.next()); */

/* //generatorを利用して、オブジェクトをiterableにする
function* generator() {
    let obj = this
    for (const i of Object.keys(obj)) {
        yield [i, obj[i]]
    }
}
let a = { name: "kaki", age: "27" }
a[Symbol.iterator] = generator
for (const [key, value] of a) {
    console.log(key, value);
} */

//generator生成的遍历器对象虽然是genreator的实例。但是generatr不能当成构造函数，因为不返回this。
//可以进行下面的修改
function* gen() {
    this.a = 4
    yield this.b = 3
    yield this.c = 5
}

function G() {
    return gen.call(gen.prototype)
}
let g2 = new G()
g2.next()
g2.next()
console.log(g2.a, g2.b, g2.c);