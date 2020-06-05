function Lazy() {
    this.list = [];
    this.resultItem = [];
    Lazy.prototype.add = function() {
        this.list.push([...arguments]);
        return this;
    };
    Lazy.prototype.invoke = function(args) {
        this.resultItem = args;
        this.list.forEach((item) => {
            this.resultItem = item.shift()(
                ...item,
                ...this.resultItem.splice(0, this.resultItem.length)
            );
        });
        this.list = [];
        return this.resultItem;
    };
}

function max() {
    return Math.max.apply(null, arguments);
}

function filterNumbers() {
    return Array.prototype.filter.call(arguments, function(value) {
        return isNumeric(value);
    });
}

function isNumeric(n) {
    return !isNaN(n) && Number(n) === n;
}

function filterRange(min, max) {
    var args = Array.prototype.slice.call(arguments, 2);
    return Array.prototype.filter.call(args, function(value) {
        return min <= value && value <= max;
    });
}

let a = new Lazy()
    .add(filterNumbers)
    .add(filterRange, 2, 7)
    .add(max)
    .invoke([1, 8, 6, [], "7", -1, { v: 5 }, 4]);
console.log(a);

// let l1 = new Lazy();
// var fn1 = function(a, b, ...args) {
//     return a + b + args[0];
// };
// var fn2 = function(a, b, ...args) {
//     return a - b + args[0];
// };
// var fn3 = function(a, b, ...args) {
//     return a + b + args[0] + args[1];
// };

// l1.add(fn1, 2, 3).add(fn2, 3, 2).add(fn3, 1, 1).invoke(4, 5);