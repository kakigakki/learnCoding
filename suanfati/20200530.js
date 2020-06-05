/* 写一个函数,类似shell中pipe的功能,让下面函数函数能够一直调用 */
var addOne = function(e) {
    return e + 1;
};
var square = function(e) {
    return e * e;
};

Function.prototype.pipe = (function() {
    return function(e) {
        var fn = this;
        return function(a) {
            return e(fn(a));
        };
    };
})();

var result2 = [1, 2, 3, 4, 5].map(addOne.pipe(square));
console.log(result2);

// //大神写法,利用bind轻松解决..
// Function.prototype.pipe = function(fun) {
//   return function(param) {
//     return fun(this(param));
//   }.bind(this);
// };