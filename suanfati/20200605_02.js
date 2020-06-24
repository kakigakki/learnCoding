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
      console.log(item);
      let args = item.slice(1)
      this.resultItem = item[0](...(args.concat(this.resultItem.splice(0, this.resultItem.length))));
    });

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

console.log()
let a = new Lazy()
let r = a.add(filterNumbers)
  .add(filterRange, 2, 7)
  .add(max)
  .invoke([1, 8, 6, [], "7", -1, { v: 5 }, 4])
let r2 = a.invoke([1, 8, 6, [], "7", -1, { v: 5 }, 4])
console.log(r, r2);

/* 大神解法,利用Bind绑定原函数自带的参数,用reduce去叠加参数

class Lazy {
  constructor() {
    this.fnChain = [];
  }
  add(fn, ...args) {
    this.fnChain.push(fn.bind(this, ...args));
    return this;
  }
  invoke(args) {
    return this.fnChain.reduce((args, fn) => fn(...args), args);
  }
}
*/