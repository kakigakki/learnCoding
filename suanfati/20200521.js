// Let's make a Cat constructor!
//闭包练习.算出猫的平均体重
var Cat = (function() {
    //闭包关键
    var cats = []
    var Cat = function(name, weight) {
            if (!name || !weight) {
                throw new Error('Both `name` and `weight` should be provided');
            }
            Object.defineProperty(this, "name", {
                get: function() {
                    return name
                }
            })
            Object.defineProperty(this, "weight", {
                get: function() {
                    return weight || 0
                },
                set: function(x) {
                    weight = x
                    return weight
                }
            })
            cats.push(this)
        }
        //闭包关键
    Cat.averageWeight = function() {
        return cats.reduce((prev, cur) => { return prev + cur.weight }, 0) / cats.length
    }
    return Cat
}());


let c1 = new Cat("kati", 20)
let c2 = new Cat("kati2", 40)
console.log(Cat.averageWeight());