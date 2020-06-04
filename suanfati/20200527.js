/* 模拟一个bind函数，具备下面条件
1. 能够传参(两种情况 ： bind的时候传参，返回值调用的时候传参)
2. 原始函数有返回值
3. 返回值能够作为构造函数
*/

Function.prototype.bind2 = function(context) {
    var self = this; //this为调用bind的原始函数
    var args = [...arguments].slice(1); //如果是es5以下版本的话，可以使用Array.prototype.slice.call(arguments,1)
    var fbound = function() {
        //调用bound时，传入的参数
        var bindArgs = [...arguments];
        //调用return是考虑到原始函数有返回值的情况
        //将两类参数拼接到一起
        return self.apply(
            this instanceof fbound ? this : context,
            bindArgs.concat(args)
        );
    };
    fbound.prototype = this.prototype;
    return fbound;
};

var foo = {
    var: 3,
};
var bar = function(name, age) {
    //console.log(name);
    //console.log(age);
    return this.var;
};

// var bound = bar.bind(foo);
// bound("kaki", 18);

var bound2 = bar.bind2(foo);
bound2.prototype.value = 5;
var fbound = new bound2("kaki", 18);
console.log(fbound.value);