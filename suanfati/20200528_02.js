/* 用class和闭包各实现一个单例模式 */

//闭包
let Single1 = (function() {
  let instance
  return function() {
    if (!instance) {
      instance = function(name, age) {
        this.name = name
        this.age = age
      }
    }
    return instance
  }
})()

var s1 = new Single1()
var s2 = new Single1()
console.log(s1 === s2);


//class静态方法

class Single2 {
  static getInstance() {
    if (!Single2.instance) {
      Single2.instance = new Single2()
    }
    return Single2.instance
  }

}


var s3 = Single2.getInstance()
var s4 = Single2.getInstance()
console.log(s3 === s4);