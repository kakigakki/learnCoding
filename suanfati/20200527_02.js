/* 实现一个事件订阅器 */

function Event() {
    this.funcs = new Set();
    this.subscibe = function(func) {
        this.funcs.add(func);
    };
    this.unsubscribe = function(func) {
        this.funcs.delete(func);
    };
    this.emit = function() {
        this.funcs.forEach((item) => item(...arguments));
    };
}
let e1 = new Event();
let f1 = function(a, b) {
    console.log(a + b);
};
let f2 = function(a, b) {
    console.log(a * b);
};
e1.subscibe(f1);
e1.subscibe(f2);
e1.unsubscribe(f1);
console.log(e1);