/* Create function that:

accepts any number of parameters,
returns sum of every single parameter given,
any parameter that can not be parsed as a number will be counted as 0.
can be called infinitely,
the next function call will do the same thing, but also summing the last returned number. */

function MagicFunction(...args) {
    let sum1 = 0
    let f1 = (...args) => {
        //将能转为数值的转为数值
        sum1 += args.map(Number)
            //排除NaN
            .reduce((cur, prev) => {
                return (!isNaN(prev) ? prev : 0) + cur
            }, 0)
        return f1
    }

    f1.valueOf = () => sum1 //利用valueOf重新声明f1函数，此时 f1.valueOf() == f1 为true
    return f1(...args)
}

let sum = MagicFunction(1, 1, 1)(1, 2, 0, "ad")
console.log(sum());