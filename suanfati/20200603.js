/* 实现两种clone方法，一种简洁，一种方便阅读 */

/* //方法1
//需要掌握typeof 和this.contructor分别输出什么
Object.prototype.clone = function() {
    //判断是数组还是对象，分别赋予【】 {}
    //循环遍历数组/对象中的内容，继续判断是否是数组，对象，然后递归
    let o = this.constructor === Array ? [] : {};
    for (const i in this) {
        o[i] = typeof this[i] === "Object" ? this[i].clone() : this[i];
    }
    return o;
}; */

//方法2
//了解array的instanceof
let clone = function(obj) {
    let copy;
    if (obj instanceof Array) {
        copy = [];
        //[]是new Array的实例
        let length = obj.length;
        while (length--) {
            copy[length] = clone(obj[length]);
        }
        return copy;
    } else if (obj instanceof Object) {
        copy = {};
        //{}是new Object的实例
        for (const key in obj) {
            copy[key] = clone(obj[key]);
        }
        return copy;
    } else {
        return obj;
    }
};

var arr = { l: "1", arr: [1, 2, 3] };
var arr2 = clone(arr);
console.log(arr2);