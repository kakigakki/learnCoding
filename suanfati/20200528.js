/* 利用class的静态方法和闭包各实现一个单例模式 */
class singleDog {
    static constructor() {
        let instance;
        if (!instance) {
            instance = new singleDog();
        } else {
            instance = instance;
        }
        return instance;
    }
}

let SingleObejct = (function() {
    let instance;
    return function() {
        if (!instance) {
            instance = new SingleObejct();
        } else {
            instance = instance;
        }
    };
})();

let d1 = new singleDog();
let d2 = new singleDog();
console.log(d1 === d2);